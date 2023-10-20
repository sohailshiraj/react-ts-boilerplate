import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { lazyLoad } from '../../../utils/loadable';

export function Home() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="aqcess homepage" />
      </Helmet>
      <span>My HomePage</span>
    </>
  );
}

/**
 * Asynchronously loads the component for HomePage
 */

export const HomePage = lazyLoad(
  () => import('.'),
  module => module.Home,
);
