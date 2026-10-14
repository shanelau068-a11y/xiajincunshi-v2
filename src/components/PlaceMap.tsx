import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LocateFixed, MapPin } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Place } from '../data/places';

type TileLayerConfig = {
  url: string;
  options: L.TileLayerOptions;
};

const mapCenter: L.LatLngExpression = [23.6667, 116.65];

const getTileLayers = (): TileLayerConfig[] => {
  const customTileUrl = import.meta.env.VITE_MAP_TILE_URL as string | undefined;
  const customAttribution = (import.meta.env.VITE_MAP_ATTRIBUTION as string | undefined) ?? '';
  if (customTileUrl) {
    return [{ url: customTileUrl, options: { attribution: customAttribution, maxZoom: 19 } }];
  }

  const provider = (
    (import.meta.env.VITE_MAP_PROVIDER as string | undefined) ?? 'osm'
  ).toLowerCase();
  const tiandituKey = import.meta.env.VITE_TIANDITU_KEY as string | undefined;
  if (provider === 'tianditu' && tiandituKey) {
    return [
      {
        url: `https://t{s}.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=${tiandituKey}`,
        options: {
          subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
          maxZoom: 18,
          attribution: '国家地理信息公共服务平台 天地图',
        },
      },
      {
        url: `https://t{s}.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=${tiandituKey}`,
        options: {
          subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
          maxZoom: 18,
          attribution: '国家地理信息公共服务平台 天地图',
        },
      },
    ];
  }

  return [
    {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      options: {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors',
      },
    },
  ];
};

const createMarkerIcon = (isActive: boolean, type: Place['type']) =>
  L.divIcon({
    className: '',
    html: `<span class="village-map-marker ${isActive ? 'village-map-marker-active' : ''}" data-type="${type}"></span>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

export function PlaceMap({ places }: { places: Place[] }) {
  const [showDrafts, setShowDrafts] = useState(false);
  const [tileError, setTileError] = useState(false);
  const [activeId, setActiveId] = useState(places[0]?.id);
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerLayerRef = useRef<L.LayerGroup | null>(null);
  const active = places.find((place) => place.id === activeId) ?? places[0];

  const tileLayers = useMemo(() => getTileLayers(), []);

  useEffect(() => {
    if (!mapElementRef.current || mapRef.current) return;
    const map = L.map(mapElementRef.current, {
      center: mapCenter,
      zoom: 15,
      minZoom: 4,
      scrollWheelZoom: true,
    });

    tileLayers.forEach((layer) =>
      L.tileLayer(layer.url, layer.options)
        .on('tileerror', () => setTileError(true))
        .addTo(map),
    );
    markerLayerRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;
    const resize = window.setTimeout(() => map.invalidateSize(), 120);

    return () => {
      map.remove();
      window.clearTimeout(resize);
      mapRef.current = null;
      markerLayerRef.current = null;
    };
  }, [tileLayers]);

  useEffect(() => {
    const markerLayer = markerLayerRef.current;
    if (!markerLayer) return;
    markerLayer.clearLayers();

    places
      .filter((place) => place.coordinateStatus === '已定位' || showDrafts)
      .forEach((place) => {
        const marker = L.marker([place.lat, place.lng], {
          icon: createMarkerIcon(place.id === activeId, place.type),
          title: place.name,
        });
        marker.on('click', () => setActiveId(place.id));
        marker.bindTooltip(place.name, { direction: 'top', offset: [0, -12], opacity: 0.95 });
        marker.addTo(markerLayer);
      });
  }, [activeId, places, showDrafts]);

  useEffect(() => {
    if (!active || !mapRef.current || (active.coordinateStatus !== '已定位' && !showDrafts)) return;
    mapRef.current.setView([active.lat, active.lng], Math.max(mapRef.current.getZoom(), 16), {
      animate: true,
    });
  }, [active, showDrafts]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
      <section className="overflow-hidden rounded-sm border border-brown/15 bg-paper">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brown/15 p-4 text-sm">
          <span>参考底图 · 待核坐标不作为实际位置</span>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showDrafts}
              onChange={(e) => setShowDrafts(e.target.checked)}
            />
            显示待核示意点
          </label>
        </div>
        <div ref={mapElementRef} className="village-leaflet-map" aria-label="村庄参考地图" />
        {tileError && (
          <p role="status" className="status-note">
            底图暂时未能加载，地标资料仍可查看。
          </p>
        )}
      </section>
      <aside className="rounded-sm border border-brown/15 bg-paper p-5 shadow-paper">
        <p className="text-sm text-gold">{active?.type}</p>
        <h2 className="mt-1 font-serif text-2xl font-bold text-brown">{active?.name}</h2>
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-brown/60">
          {active?.coordinateStatus && (
            <span className="rounded-sm border border-brown/10 bg-rice px-2 py-1">
              <LocateFixed size={13} className="mr-1 inline" />
              {active.coordinateStatus}
            </span>
          )}
          {active?.coordinateStatus === '已定位' && (
            <span className="rounded-sm border border-brown/10 bg-rice px-2 py-1">
              {active.lat.toFixed(6)}, {active.lng.toFixed(6)}
            </span>
          )}
        </div>
        <p className="mt-4 leading-8 text-ink/75">{active?.description}</p>
        <div className="mt-6 grid grid-cols-2 gap-2">
          {places.map((place) => (
            <button
              key={place.id}
              onClick={() => setActiveId(place.id)}
              className={`rounded-sm border px-3 py-2 text-left text-sm transition ${
                place.id === activeId
                  ? 'border-gold bg-brown text-paper'
                  : 'border-brown/15 text-brown hover:border-gold'
              }`}
            >
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {place.name}
              </span>
            </button>
          ))}
        </div>
        <p className="mt-5 rounded-sm bg-rice p-3 text-sm leading-6 text-brown/70">
          目前待核地标的名称、简介及位置仍为示例资料，须用实地记录校对。
        </p>
      </aside>
    </div>
  );
}
