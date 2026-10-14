import MiniSearch from 'minisearch';
import { Trash2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SearchBox } from '../components/SearchBox';
import { PageHeader } from '../components/PageHeader';
import { searchDocs } from '../data/searchDocs';
import { createSnippet, highlightedParts, tokenizeChinese } from '../utils/text';
import { readSearchHistory, rememberSearch } from '../utils/searchHistory';
export function SearchPage() {
  const [params] = useSearchParams();
  const query = params.get('q')?.trim() ?? '';
  const [history, setHistory] = useState<string[]>(readSearchHistory),
    [scope, setScope] = useState('全部'),
    [limit, setLimit] = useState(20);
  useEffect(() => {
    if (query) setHistory(rememberSearch(query));
    setLimit(20);
  }, [query, scope]);
  const searcher = useMemo(() => {
    const index = new MiniSearch<(typeof searchDocs)[number]>({
      fields: ['title', 'text'],
      storeFields: ['file'],
      tokenize: tokenizeChinese,
      searchOptions: { prefix: false, fuzzy: false },
    });
    index.addAll(searchDocs);
    return index;
  }, []);
  const resultIds = useMemo(() => {
    if (!query) return [];
    const direct = searchDocs
      .filter((doc) => `${doc.title} ${doc.text}`.toLowerCase().includes(query.toLowerCase()))
      .map((doc) => doc.id);
    return direct.length
      ? direct
      : searcher.search(query, { combineWith: 'AND' }).map((r) => String(r.id));
  }, [query, searcher]);
  const resultSet = new Set(resultIds);
  const results = searchDocs.filter(
    (doc) => resultSet.has(doc.id) && (scope === '全部' || doc.part === scope),
  );
  const scopes = ['全部', ...[...new Set(searchDocs.map((doc) => doc.part))]];
  const clear = () => {
    try {
      localStorage.removeItem('xiajin-search-history');
    } catch {
      /* Storage is optional. */
    }
    setHistory([]);
  };
  return (
    <div className="page-shell max-w-5xl">
      <PageHeader eyebrow="原文全文 · 中文检索" title="检索所有章节" />
      <div className="search-controls">
        <SearchBox defaultValue={query} large />
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-brown/55">搜索历史</span>
            {history.map((q) => (
              <Link
                key={q}
                to={`/search?q=${encodeURIComponent(q)}`}
                className="px-2 py-1 text-brown underline decoration-gold/50 underline-offset-4"
              >
                {q}
              </Link>
            ))}
            {history.length > 0 && (
              <button
                className="reader-btn !p-2"
                title="清除搜索历史"
                aria-label="清除搜索历史"
                onClick={clear}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
          <select
            className="museum-input !w-auto max-w-full"
            aria-label="篇章范围"
            value={scope}
            onChange={(e) => setScope(e.target.value)}
          >
            {scopes.map((s) => (
              <option key={s} value={s}>
                {s === '全部' ? '全部篇章' : s}
              </option>
            ))}
          </select>
        </div>
      </div>
      {!query ? (
        <p className="empty-state">请输入关键词</p>
      ) : (
        <>
          <p className="text-sm text-brown/60" aria-live="polite">
            找到 {results.length} 条相关内容
          </p>
          <div className="search-results">
            {results.slice(0, limit).map((doc) => (
              <Link
                key={doc.id}
                to={`/book?file=${encodeURIComponent(doc.file)}&q=${encodeURIComponent(query)}`}
              >
                <small className="text-moss">{doc.part}</small>
                <h2>{doc.title}</h2>
                <p>
                  {highlightedParts(createSnippet(doc.text, query), query).map((part, i) =>
                    part.toLowerCase() === query.toLowerCase() ? (
                      <mark key={i}>{part}</mark>
                    ) : (
                      <span key={i}>{part}</span>
                    ),
                  )}
                </p>
              </Link>
            ))}
          </div>
          {!results.length && <div className="empty-state">未找到相关内容</div>}
          {results.length > limit && (
            <button className="reader-btn mt-6" onClick={() => setLimit(limit + 20)}>
              加载更多
            </button>
          )}
        </>
      )}
    </div>
  );
}
