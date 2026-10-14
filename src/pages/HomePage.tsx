import { ArrowRight, BookOpen, Camera, Clock3, GitBranch, Search, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SearchBox } from '../components/SearchBox';
import { bookChapters } from '../data/book';
import { withBasePath } from '../utils/publicPath';
import { readingProgress } from '../utils/storage';

const entries = [
  { to: '/book', label: '村史阅读', Icon: BookOpen },
  { to: '/search', label: '全文搜索', Icon: Search },
  { to: '/timeline', label: '大事记', Icon: Clock3 },
  { to: '/people', label: '人物志', Icon: UsersRound },
  { to: '/genealogy', label: '族谱世系', Icon: GitBranch },
  { to: '/gallery', label: '老照片', Icon: Camera },
];
export function HomePage() {
  const progress = readingProgress();
  return (
    <div>
      <section className="museum-hero">
        <img
          className="hero-photo"
          src={withBasePath('/images/extracted/下津村史_(37)_photo_01.jpg')}
          alt="村史扫描页中的传统建筑与村落影像"
          fetchPriority="high"
        />
        <div className="hero-content">
          <p className="eyebrow">乡土记忆 · 文脉传承</p>
          <h1>下津村史数字馆</h1>
          <p className="hero-subtitle">留住乡土记忆，传承村庄文脉</p>
          <div className="hero-search">
            <SearchBox large />
          </div>
          <div className="hero-actions">
            <Link className="primary-link" to="/book">
              <BookOpen size={18} />
              翻开村史
              <ArrowRight size={17} />
            </Link>
            {progress && (
              <Link className="quiet-link" to={`/book?file=${encodeURIComponent(progress.file)}`}>
                继续阅读：{progress.title}
              </Link>
            )}
          </div>
        </div>
        <p className="hero-caption">影像来源：村史扫描件（文件编号 37）</p>
      </section>
      <nav className="entry-band" aria-label="快捷入口">
        <div>
          {entries.map(({ to, label, Icon }) => (
            <Link key={to} to={to}>
              <Icon size={22} />
              <span>{label}</span>
              <ArrowRight size={15} />
            </Link>
          ))}
        </div>
      </nav>
      <section className="page-width home-catalog">
        <div className="section-heading">
          <div>
            <p className="eyebrow">全书目录</p>
            <h2>十篇村史，一村记忆</h2>
          </div>
          <Link to="/sources" className="quiet-link">
            资料与校对
            <ArrowRight size={16} />
          </Link>
        </div>
        <p className="intro-copy">
          从土地资源、先祖创乡，到村庄建设、人物与文化。《下津村史》的章节、照片与世系资料在这里汇集，原文记载与待核内容均保留来源。
        </p>
        <div className="catalog-list">
          {bookChapters.map((chapter) => (
            <Link key={chapter.id} to={`/book?chapter=${chapter.id}`}>
              <span className="chapter-number">
                {chapter.order === 0 ? '序' : String(chapter.order).padStart(2, '0')}
              </span>
              <div>
                <small>{chapter.part}</small>
                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>
              </div>
              <ArrowRight size={20} />
            </Link>
          ))}
        </div>
      </section>
      <section className="archive-note">
        <div className="page-width">
          <p className="eyebrow">关于这座数字馆</p>
          <h2>让每一份记载，都有迹可循</h2>
          <p>
            资料源自《下津村史》电子版、原书扫描件与族谱整理表。人口口径、同名人物和未明确的亲属关系，保留在校对记录中，等待原始资料确认。
          </p>
          <Link className="quiet-link" to="/about">
            了解项目
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
