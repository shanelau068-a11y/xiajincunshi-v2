import { useState } from 'react';
import { PersonCard } from '../components/PersonCard';
import { PageHeader } from '../components/PageHeader';
import { FilterBar } from '../components/FilterBar';
import { people } from '../data/people';
export function PeoplePage() {
  const [category, setCategory] = useState('全部'),
    [query, setQuery] = useState('');
  const categories = ['全部', ...[...new Set(people.map((p) => p.category))]];
  const filtered = people.filter(
    (p) => (category === '全部' || p.category === category) && p.name.includes(query.trim()),
  );
  return (
    <div className="page-shell">
      <PageHeader eyebrow="乡贤 · 人物 · 事迹" title="村中人物">
        《第七篇 人物》整理收录 {people.length} 位
      </PageHeader>
      <div className="mb-5 max-w-md">
        <input
          className="museum-input"
          aria-label="按姓名搜索人物"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="按姓名搜索"
        />
      </div>
      <FilterBar options={categories} value={category} onChange={setCategory} />
      <p className="mb-5 text-sm text-brown/60">共 {filtered.length} 位</p>
      {filtered.length ? (
        <div className="person-list">
          {filtered.map((p) => (
            <PersonCard key={p.id} person={p} />
          ))}
        </div>
      ) : (
        <div className="empty-state">没有符合条件的人物</div>
      )}
    </div>
  );
}
