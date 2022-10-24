import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom/client';
import { globalCss } from '#/stitches.config';
import { ToastContainer } from 'react-toastify';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ROUTES } from './constants';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { Main } from '@/page';

import 'react-toastify/dist/ReactToastify.min.css';
import './animated.css'

globalCss({
  '@import': [
    'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css',
  ],
  ':root': {
    'fontSize': '6px',
    '--toastify-font-family': 'Pretendard',
  },
  'body': {
    fontSize: '4rem',
    fontFamily: 'Pretendard',
    margin: '0px',
    overflow: 'hidden',
  },
})();

const pages: Record<ROUTES, FunctionComponent> = {
  [ROUTES.ROOT]: Main,
};

const App = () => {
  const location = useLocation();

  return (
    <>
      <ToastContainer />
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Routes location={location}>
            {Object.entries(pages).map(([route, Component]) => (
              <Route key={route} path={route} element={<Component />} />
            ))}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
