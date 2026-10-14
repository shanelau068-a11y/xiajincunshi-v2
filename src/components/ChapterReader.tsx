import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { BookChapter } from '../data/book';
import { loadStored, saveStored } from '../utils/storage';
import { withBasePath } from '../utils/publicPath';
import { normalizeBookHtml } from '../utils/text';

type ChapterReaderProps = {
  chapter: BookChapter;
  chapters: BookChapter[];
  highlight?: string | null;
  onChangeChapter: (chapter: BookChapter) => void;
};

export function ChapterReader({
  chapter,
  chapters,
  highlight,
  onChangeChapter,
}: ChapterReaderProps) {
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(true);
  const [fontSize, setFontSize] = useState(() =>
    loadStored<number>(
      'xiajin-font-size',
      (v): v is number => typeof v === 'number' && v >= 16 && v <= 28,
      20,
    ),
  );
  const [retry, setRetry] = useState(0);
  const [error, setError] = useState(false);

  const index = useMemo(
    () => chapters.findIndex((item) => item.file === chapter.file),
    [chapter.file, chapters],
  );
  const previous = index > 0 ? chapters[index - 1] : undefined;
  const next = index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : undefined;

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();
    setLoading(true);
    setError(false);
    fetch(withBasePath(`/book/${chapter.file}`), { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`无法读取章节：${chapter.file}`);
        if (!response.headers.get('content-type')?.includes('text/html'))
          throw new Error('章节格式错误');
        return response.text();
      })
      .then((raw) => {
        if (/\/src\/main\.tsx|<div id="root"><\/div>/.test(raw))
          throw new Error('返回了网站入口而非章节');
        if (mounted) {
          setHtml(normalizeBookHtml(raw, chapter.file, highlight));
          saveStored('xiajin-last-read', {
            file: chapter.file,
            title: chapter.title,
            part: chapter.part,
          });
        }
      })
      .catch(() => {
        if (mounted) setError(true);
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
      controller.abort();
    };
  }, [chapter.file, highlight, retry]);

  const changeFont = (delta: number) =>
    setFontSize((size) => {
      const next = Math.min(28, Math.max(16, size + delta));
      saveStored('xiajin-font-size', next);
      return next;
    });

  return (
    <article className="reader-paper min-w-0">
      <div className="flex flex-col gap-3 border-b border-brown/10 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-gold">{chapter.part}</p>
          <h1 className="font-serif text-2xl font-bold text-brown lg:text-3xl">{chapter.title}</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="reader-btn" onClick={() => changeFont(-1)} aria-label="减小字号">
            A-
          </button>
          <button className="reader-btn" onClick={() => changeFont(1)} aria-label="增大字号">
            A+
          </button>
          <button
            className="reader-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <RotateCcw size={16} />
            顶部
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brown/10 px-4 py-3 text-sm">
        <button
          className="reader-btn"
          disabled={!previous}
          onClick={() => previous && onChangeChapter(previous)}
        >
          <ChevronLeft size={16} />
          上一章
        </button>
        <span className="text-brown/60">当前字号 {fontSize}px</span>
        <button
          className="reader-btn"
          disabled={!next}
          onClick={() => next && onChangeChapter(next)}
        >
          下一章
          <ChevronRight size={16} />
        </button>
      </div>
      <div
        className="book-content"
        style={{ fontSize }}
        aria-busy={loading}
        onClick={(event) => {
          const anchor = (event.target as HTMLElement).closest('a');
          const href = anchor?.getAttribute('href');
          if (href?.startsWith('#') && !href.startsWith('#/')) {
            event.preventDefault();
            const id = href.slice(1);
            event.currentTarget
              .querySelector(`[id="${CSS.escape(id)}"]`)
              ?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        {loading ? (
          <p role="status">正在加载章节...</p>
        ) : error ? (
          <div role="alert">
            <p>章节暂时无法读取。</p>
            <button className="reader-btn" onClick={() => setRetry((v) => v + 1)}>
              重新加载
            </button>
          </div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        )}
      </div>
    </article>
  );
}
