/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { Global } from '@emotion/react';

import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './components/NotFoundPage';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - aqcess"
        defaultTitle="aqcess - softwareq Inc."
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta
          name="description"
          content="aqcess: accessing quantum computing - easy, smart, simple"
        />
      </Helmet>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Global styles={GlobalStyle}></Global>
    </BrowserRouter>
  );
}
