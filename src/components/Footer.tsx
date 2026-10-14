import { Link } from 'react-router-dom';
export function Footer() {
  return (
    <footer className="museum-footer">
      <div className="page-width">
        <div>
          <p className="font-serif text-xl">下津村史数字馆</p>
          <p className="mt-2 text-sm opacity-70">保存村史 · 尊重原文 · 持续校对</p>
        </div>
        <div className="footer-links">
          <Link to="/sources">资料与校对</Link>
          <Link to="/about">关于与联系</Link>
          <span>第二版 · 2026</span>
        </div>
      </div>
    </footer>
  );
}
