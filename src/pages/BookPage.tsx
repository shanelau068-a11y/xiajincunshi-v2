import { useSearchParams } from 'react-router-dom';
import { ChapterReader } from '../components/ChapterReader';
import { ChapterSidebar } from '../components/ChapterSidebar';
import { type BookChapter } from '../data/book';
import { findReadingChapter, readingChapters } from '../utils/bookNavigation';

export function BookPage() {
  const [params, setParams] = useSearchParams();
  const chapter = findReadingChapter(params.get('file'), params.get('chapter'));
  const changeChapter = (next: BookChapter) => {
    const value = new URLSearchParams();
    value.set('file', next.file);
    setParams(value);
    window.scrollTo({ top: 0 });
  };
  return (
    <div className="book-layout">
      <div className="book-sidebar">
        <ChapterSidebar activeId={chapter.id} onSelect={changeChapter} />
      </div>
      <ChapterReader
        chapter={chapter}
        chapters={readingChapters}
        highlight={params.get('q')}
        onChangeChapter={changeChapter}
      />
    </div>
  );
}
