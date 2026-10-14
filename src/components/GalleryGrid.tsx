import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { GalleryPhoto } from '../data/gallery';
import { withBasePath } from '../utils/publicPath';

export function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [active, setActive] = useState<GalleryPhoto | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [missingIds, setMissingIds] = useState<Set<string>>(() => new Set());
  const visiblePhotos = photos.filter((photo) => !missingIds.has(photo.id));
  const markMissing = (photo: GalleryPhoto) => {
    setMissingIds((current) => new Set(current).add(photo.id));
    setActive((current) => (current?.id === photo.id ? null : current));
  };
  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    const trigger = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector('button')?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null);
      if (event.key === 'Tab') {
        const nodes = Array.from(
          dialogRef.current?.querySelectorAll<HTMLElement>('button, a[href]') ?? [],
        );
        const first = nodes[0],
          last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        }
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener('keydown', close);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', close);
      trigger?.focus();
    };
  }, [active]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {visiblePhotos.map((photo) => (
          <button
            key={photo.id}
            onClick={() => setActive(photo)}
            className="overflow-hidden rounded-sm border border-brown/15 bg-paper text-left shadow-sm transition hover:border-gold/60 hover:shadow-paper"
          >
            <img
              src={withBasePath(photo.image)}
              alt={photo.title}
              loading="lazy"
              onError={() => markMissing(photo)}
              className="aspect-[4/3] w-full bg-rice object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-serif text-lg font-bold text-brown">{photo.title}</h3>
                <span className="text-xs text-gold">{photo.year}</span>
              </div>
              <p className="mt-1 text-sm text-brown/65">{photo.category}</p>
              {photo.description.includes('自动初筛') && (
                <span className="mt-2 inline-block text-xs text-moss">照片说明待核</span>
              )}
              {photo.sourcePage && (
                <p className="mt-2 truncate text-xs text-brown/45">来源：{photo.sourcePage}</p>
              )}
            </div>
          </button>
        ))}
      </div>
      {active && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-ink/70 p-4"
          onClick={() => setActive(null)}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-sm bg-paper p-4 shadow-paper"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-2 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-brown">{active.title}</h3>
                <p className="text-sm text-brown/60">
                  {active.year} · {active.category}
                </p>
              </div>
              <button
                className="grid h-9 w-9 place-items-center rounded-sm border border-brown/15 text-brown"
                onClick={() => setActive(null)}
                aria-label="关闭大图"
              >
                <X size={18} />
              </button>
            </div>
            <img
              src={withBasePath(active.image)}
              alt={active.title}
              className="max-h-[70vh] w-full object-contain"
            />
            <p className="mt-3 text-brown/75">{active.description}</p>
            {active.sourcePage && (
              <p className="mt-2 text-sm text-brown/55">来源扫描页：{active.sourcePage}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
