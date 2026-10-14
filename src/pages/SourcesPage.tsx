import { useState } from 'react';
import { FilterBar } from '../components/FilterBar';
import { PageHeader } from '../components/PageHeader';
import { SourceLinks } from '../components/SourceLinks';
import review from '../data/review.json';
export function SourcesPage() {
  const [category, setCategory] = useState('全部');
  const categories = ['全部', '原文', '族谱', '地图'];
  const visible = review.issues.filter(
    (i) =>
      category === '全部' ||
      (category === '原文'
        ? i.category.startsWith('原文')
        : category === '地图'
          ? i.category === '地图'
          : !i.category.startsWith('原文') && i.category !== '地图'),
  );
  return (
    <div className="page-shell">
      <PageHeader eyebrow="原文 · 整理 · 校对" title="资料与校对">
        资料更新：{review.date} · 待核记录 {review.issues.length} 项
      </PageHeader>
      <div className="status-note mb-6">
        村史正文保留原书记载。整理表记载和亲子关系推定分别标注；尚未明确的母系、姓氏、年代及地图坐标继续保留待核。
      </div>
      <FilterBar options={categories} value={category} onChange={setCategory} />
      <div className="divide-y divide-brown/15">
        {visible.map((issue) => (
          <article key={issue.id} className="py-6">
            <p className="eyebrow">
              {issue.category} · {issue.status}
            </p>
            <h2 className="font-serif text-xl font-bold text-brown">{issue.title}</h2>
            <p className="mt-3 max-w-4xl text-base leading-8 text-brown/75">{issue.detail}</p>
            <SourceLinks files={issue.sourceFiles} />
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm leading-7 text-brown/65">
        另有 {review.unknownGenerations}{' '}
        位男性没有明确世数资料，继续显示“世系待考”。这不等于人名错误，也不据姓名补写世数。
      </p>
    </div>
  );
}
