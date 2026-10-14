import { useState } from 'react';
import { GalleryGrid } from '../components/GalleryGrid';
import { PageHeader } from '../components/PageHeader';
import { FilterBar } from '../components/FilterBar';
import { galleryPhotos } from '../data/gallery';
export function GalleryPage() {
  const [category, setCategory] = useState('全部');
  const categories = ['全部', ...[...new Set(galleryPhotos.map((p) => p.category))]];
  const photos = galleryPhotos.filter((p) => category === '全部' || p.category === category);
  return (
    <div className="page-shell">
      <PageHeader eyebrow="村落 · 建筑 · 人物" title="影像记忆">
        村史扫描件与照片资料 · {galleryPhotos.length} 张
      </PageHeader>
      <FilterBar options={categories} value={category} onChange={setCategory} />
      <GalleryGrid photos={photos} />
    </div>
  );
}
