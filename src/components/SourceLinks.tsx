import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
export function SourceLinks({ files, title = '原文来源' }: { files: string[]; title?: string }) {
  const distinct = [...new Set(files.filter(Boolean))];
  if (!distinct.length) return null;
  return (
    <div className="source-links">
      <p>{title}</p>
      {distinct.map((file) => (
        <Link key={file} to={`/book?file=${encodeURIComponent(file)}`}>
          <BookOpen size={15} />
          <span>
            查看原文：
            {file
              .split('/')
              .slice(-1)[0]
              .replace(/\s+[a-f0-9]{20,}\.html$/i, '')
              .replace(/\.html$/i, '')}
          </span>
        </Link>
      ))}
    </div>
  );
}
