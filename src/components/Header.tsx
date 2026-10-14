import {
  BookOpen,
  Camera,
  GitBranch,
  Home,
  Landmark,
  Map,
  Menu,
  Search,
  Users,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: '首页', icon: Home },
  { to: '/book', label: '村史阅读', icon: BookOpen },
  { to: '/search', label: '全文搜索', icon: Search },
  { to: '/timeline', label: '大事记', icon: Landmark },
  { to: '/people', label: '人物志', icon: Users },
  { to: '/genealogy', label: '族谱世系', icon: GitBranch },
  { to: '/gallery', label: '老照片', icon: Camera },
  { to: '/map', label: '地图', icon: Map },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brown/15 bg-paper/95 shadow-sm backdrop-blur">
      <a
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById('main-content')?.focus();
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:bg-paper focus:p-3"
      >
        跳到正文
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        <NavLink to="/" className="flex items-center gap-3 font-serif text-xl font-bold text-brown">
          <span className="grid h-10 w-10 place-items-center rounded-sm border border-gold/50 bg-rice text-gold">
            津
          </span>
          <span>下津村史数字馆</span>
        </NavLink>
        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-1.5 rounded-sm px-3 py-2 text-sm transition ${
                  isActive ? 'bg-brown text-paper' : 'text-brown hover:bg-brown/10'
                }`
              }
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/about"
            className="rounded-sm px-3 py-2 text-sm text-brown hover:bg-brown/10"
          >
            关于
          </NavLink>
        </nav>
        <button
          className="grid h-10 w-10 place-items-center rounded-sm border border-brown/20 text-brown xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="打开导航"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="grid gap-1 border-t border-brown/10 bg-paper px-4 py-3 xl:hidden">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-sm px-3 py-2 ${isActive ? 'bg-brown text-paper' : 'text-brown'}`
              }
            >
              <Icon size={17} />
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className="rounded-sm px-3 py-2 text-brown"
          >
            关于
          </NavLink>
        </nav>
      )}
    </header>
  );
}
