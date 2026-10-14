import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Suspense } from 'react';

export function Layout() {
  return (
    <div className="min-h-screen bg-rice text-ink">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Suspense
          fallback={
            <p className="page-shell" role="status">
              正在加载...
            </p>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
