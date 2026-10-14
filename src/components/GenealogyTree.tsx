import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GenealogyPerson } from '../data/genealogy';
import { childrenOf, generationLabel, siblingsOf } from '../utils/genealogy';
import { SourceLinks } from './SourceLinks';

export function GenealogyTree({
  people,
  defaultFocusName = '',
}: {
  people: GenealogyPerson[];
  defaultFocusName?: string;
}) {
  const [params, setParams] = useSearchParams();
  const initial =
    people.find((p) => p.id === params.get('person')) ??
    people.find((p) => p.name === defaultFocusName) ??
    people[0];
  const [selectedId, setSelectedId] = useState(initial?.id);
  const [query, setQuery] = useState(initial?.name ?? '');
  const [clan, setClan] = useState('全部');
  const map = useMemo(() => new Map(people.map((p) => [p.id, p])), [people]);
  const matches = useMemo(
    () =>
      people.filter(
        (p) =>
          (clan === '全部' || p.clan === clan) &&
          [p.name, ...(p.aliases ?? [])].some((name) => name.includes(query.trim())),
      ),
    [people, clan, query],
  );
  const selected = matches.find((p) => p.id === selectedId) ?? matches[0];
  useEffect(() => {
    if (selected) setSelectedId(selected.id);
  }, [selected?.id]);
  const clans = [
    '全部',
    ...[...new Set(people.map((p) => p.clan).filter((c): c is string => !!c))].sort((a, b) =>
      a.localeCompare(b, 'zh-CN'),
    ),
  ];
  const select = (p: GenealogyPerson) => {
    setSelectedId(p.id);
    setQuery(p.name);
    setClan('全部');
    setParams({ person: p.id });
  };
  const unique = (items: Array<GenealogyPerson | undefined>) =>
    items.filter(
      (p, i): p is GenealogyPerson => !!p && items.findIndex((q) => q?.id === p.id) === i,
    );
  const parents = unique([map.get(selected?.fatherId ?? ''), map.get(selected?.motherId ?? '')]);
  const spouses = unique(selected?.spouseIds.map((id) => map.get(id)) ?? []).filter(
    (p) => !/未详|不详|失记/.test(p.name),
  );
  const siblings = siblingsOf(selected, people);
  const children = childrenOf(selected, people);
  const card = (p: GenealogyPerson, role: string) => (
    <button
      key={p.id}
      onClick={() => select(p)}
      className={`family-node ${selected?.id === p.id ? 'active' : ''}`}
      aria-label={`${role} ${p.name}`}
    >
      <small>{role}</small>
      <strong>{p.name}</strong>
      {generationLabel(p) && <span className="generation-label">{generationLabel(p)}</span>}
    </button>
  );
  const empty = (text: string) => <p className="py-4 text-center text-sm text-brown/50">{text}</p>;
  return (
    <div className="genealogy-layout">
      <section className="family-tree">
        <div className="family-toolbar">
          <input
            aria-label="搜索族谱姓名"
            className="museum-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索族谱姓名"
          />
          <select
            aria-label="族谱姓氏"
            value={clan}
            onChange={(e) => setClan(e.target.value)}
            className="museum-input"
          >
            {clans.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        {query.trim() && (
          <div className="family-matches" aria-live="polite">
            <p>
              找到 {matches.length} 位{matches.length > 20 ? '，列出前20位' : ''}
            </p>
            {matches.slice(0, 20).map((p) => (
              <button key={p.id} onClick={() => select(p)}>
                {p.name}
              </button>
            ))}
          </div>
        )}
        {!selected ? (
          <div className="empty-state">未找到这个姓名</div>
        ) : (
          <>
            <p className="family-focus">
              以 <strong>{selected.name}</strong> 为中心的三代关系
            </p>
            <div className="family-row">
              <h3>上一代</h3>
              <div className="family-nodes">
                {parents.length
                  ? parents.map((p) => card(p, p.id === selected.fatherId ? '父亲' : '母亲'))
                  : empty('暂无父母资料')}
              </div>
            </div>
            <div className="family-row">
              <h3>同辈</h3>
              <div className="family-nodes">
                <div className="family-couple">
                  {card(selected, '本人')}
                  {spouses.map((p) => (
                    <div className="flex items-center gap-2" key={p.id}>
                      <span className="couple-link" />
                      {card(p, '配偶')}
                    </div>
                  ))}
                </div>
                {siblings.length > 0 && (
                  <div className="sibling-cluster">{siblings.map((p) => card(p, '同辈'))}</div>
                )}
              </div>
            </div>
            <div className="family-row">
              <h3>下一代</h3>
              <div className="family-nodes">
                {children.length ? children.map((p) => card(p, '子女')) : empty('暂无下一代资料')}
              </div>
            </div>
          </>
        )}
      </section>
      {selected && (
        <aside className="family-details">
          <p className="eyebrow">人物资料</p>
          <h2>{selected.name}</h2>
          <dl>
            <div>
              <dt>姓氏</dt>
              <dd>{selected.clan ?? '未注明'}</dd>
            </div>
            <div>
              <dt>性别</dt>
              <dd>{selected.gender}</dd>
            </div>
            {generationLabel(selected) && (
              <div className="col-span-2">
                <dt>世系</dt>
                <dd>{generationLabel(selected)}</dd>
                <small className="text-brown/55">
                  {selected.generationEvidence === '参考表明确记载'
                    ? '整理表记载'
                    : (selected.generationEvidence ?? '尚未明确')}
                </small>
              </div>
            )}
            {(selected.birthYear || selected.deathYear) && (
              <div className="col-span-2">
                <dt>生卒</dt>
                <dd>
                  {selected.birthYear ? `${selected.birthYear}年生` : '生年未详'}
                  {selected.deathYear ? `，${selected.deathYear}年卒` : ''}
                </dd>
              </div>
            )}
          </dl>
          <p className="biography">{selected.description}</p>
          {selected.reviewNotes?.length ? (
            <div className="status-note mt-5">
              <strong>待核</strong>
              <ul>
                {selected.reviewNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <SourceLinks files={selected.sourceFiles ?? []} />
          <p className="mt-5 text-xs leading-6 text-brown/55">
            原文与整理表为本页依据。未明确的世数与亲属关系保持待考。
          </p>
        </aside>
      )}
    </div>
  );
}
