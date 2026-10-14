import { ChevronDown, List } from 'lucide-react';
import { useEffect, useState } from 'react';
import { bookChapters, type BookChapter } from '../data/book';
import { readingChapters } from '../utils/bookNavigation';

export function ChapterSidebar({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (chapter: BookChapter) => void;
}) {
  const active = readingChapters.find((c) => c.id === activeId);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(active?.parentId ?? 'preface');
  useEffect(() => {
    setExpanded(active?.parentId ?? 'preface');
  }, [active?.parentId]);
  const select = (chapter: BookChapter) => {
    onSelect(chapter);
    setMobileOpen(false);
  };
  return (
    <aside className="chapter-directory">
      <button
        className="directory-toggle lg:hidden"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <List size={20} />
        <span>村史目录</span>
        <ChevronDown size={18} />
      </button>
      <h2 className="hidden lg:block">村史目录</h2>
      <nav aria-label="村史目录" className={`${mobileOpen ? 'block' : 'hidden'} lg:block`}>
        {bookChapters.map((root) => (
          <div key={root.id} className="directory-group">
            <div className="directory-root">
              <button
                className={active?.parentId === root.id ? 'active' : ''}
                onClick={() => select(root)}
              >
                <small>{root.part}</small>
                <span>{root.title}</span>
              </button>
              {root.id !== 'preface' && (
                <button
                  title={`展开${root.title}`}
                  aria-label={`展开${root.title}`}
                  aria-expanded={expanded === root.id}
                  onClick={() => setExpanded(expanded === root.id ? '' : root.id)}
                >
                  <ChevronDown size={16} />
                </button>
              )}
            </div>
            {expanded === root.id &&
              readingChapters
                .filter((c) => c.parentId === root.id && c.depth > 0)
                .map((chapter) => (
                  <button
                    key={chapter.id}
                    aria-current={activeId === chapter.id ? 'page' : undefined}
                    className={`directory-child ${activeId === chapter.id ? 'active' : ''}`}
                    style={{ paddingLeft: `${chapter.depth * 10 + 12}px` }}
                    onClick={() => select(chapter)}
                  >
                    {chapter.title}
                  </button>
                ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
