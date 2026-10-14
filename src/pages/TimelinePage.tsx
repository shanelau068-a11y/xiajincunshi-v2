import { useState } from 'react';
import { Timeline } from '../components/Timeline';
import { PageHeader } from '../components/PageHeader';
import { FilterBar } from '../components/FilterBar';
import { timelineEvents } from '../data/timeline';
export function TimelinePage() {
  const [category, setCategory] = useState('全部');
  const categories = ['全部', ...[...new Set(timelineEvents.map((e) => e.category))]];
  const events = timelineEvents.filter((e) => category === '全部' || e.category === category);
  return (
    <div className="page-shell max-w-5xl">
      <PageHeader eyebrow="岁月 · 变迁 · 村庄记忆" title="村庄大事记">
        《第十篇 大事记》原文整理 · {timelineEvents.length} 条
      </PageHeader>
      <FilterBar options={categories} value={category} onChange={setCategory} />
      <Timeline events={events} />
    </div>
  );
}
