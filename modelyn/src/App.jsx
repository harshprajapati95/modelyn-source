import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';

const Home = lazy(() => import('./pages/Home'));
const Product = lazy(() => import('./pages/Product'));
const Docs = lazy(() => import('./pages/Docs'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Waitlist = lazy(() => import('./pages/Waitlist'));
const Changelog = lazy(() => import('./pages/Changelog'));
const Legal = lazy(() => import('./pages/Legal'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/legal/:slug" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
