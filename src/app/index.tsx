/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GlobalStyle } from 'styles/global-styles';
import { Global } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import AuthProvider from './provider/AuthProvider';
import Routes from './routes';

export function App() {
  const { i18n } = useTranslation();
  return (
    <>
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
      {/*<Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>*/}
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <Global styles={GlobalStyle}></Global>
    </>
  );
}
