import { PlaceMap } from '../components/PlaceMap';
import { places } from '../data/places';
import { PageHeader } from '../components/PageHeader';

export function MapPage() {
  return (
    <div className="page-shell">
      <PageHeader eyebrow="地点 · 建筑 · 乡土记忆" title="下津记忆地标">
        地标资料 {places.length} 项 · 已核位置{' '}
        {places.filter((p) => p.coordinateStatus === '已定位').length} 项
      </PageHeader>
      <PlaceMap places={places} />
    </div>
  );
}
