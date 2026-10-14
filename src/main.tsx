import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ErrorBoundary } from './components/ErrorBoundary';
import { HomePage } from './pages/HomePage';
import './styles.css';

const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const BookPage = lazy(() => import('./pages/BookPage').then((m) => ({ default: m.BookPage })));
const GalleryPage = lazy(() =>
  import('./pages/GalleryPage').then((m) => ({ default: m.GalleryPage })),
);
const GenealogyPage = lazy(() =>
  import('./pages/GenealogyPage').then((m) => ({ default: m.GenealogyPage })),
);
const MapPage = lazy(() => import('./pages/MapPage').then((m) => ({ default: m.MapPage })));
const PeoplePage = lazy(() =>
  import('./pages/PeoplePage').then((m) => ({ default: m.PeoplePage })),
);
const PersonDetailPage = lazy(() =>
  import('./pages/PersonDetailPage').then((m) => ({ default: m.PersonDetailPage })),
);
const SearchPage = lazy(() =>
  import('./pages/SearchPage').then((m) => ({ default: m.SearchPage })),
);
const TimelinePage = lazy(() =>
  import('./pages/TimelinePage').then((m) => ({ default: m.TimelinePage })),
);
const SourcesPage = lazy(() =>
  import('./pages/SourcesPage').then((m) => ({ default: m.SourcesPage })),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <ErrorBoundary>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/people/:id" element={<PersonDetailPage />} />
            <Route path="/genealogy" element={<GenealogyPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sources" element={<SourcesPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </HashRouter>
  </React.StrictMode>,
);
