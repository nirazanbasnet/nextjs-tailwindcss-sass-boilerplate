import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { AppLayout } from '@components/layouts/AppLayout';
import { useRouter } from 'next/router';

// Styles
import '../assets/sass/style.scss';
import '../assets/sass/tailwind.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const { events: routerEvents } = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(false);

  useEffect(() => {
    const startLoader = () => {
      setPageLoading(true);
    };

    const stopLoader = () => {
      setPageLoading(false);
    };

    routerEvents.on('routeChangeStart', startLoader);
    routerEvents.on('routeChangeComplete', stopLoader);
    routerEvents.on('routeChangeError', stopLoader);
  }, [routerEvents]);

  return (
    <>
      <DefaultSeo
        {...SEO}
        additionalMetaTags={[
          {
            httpEquiv: 'content-type',
            content: 'text/html; charset=utf-8',
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge; chrome=1',
          },
        ]}
      />
      {pageLoading ? <div className="loader"></div> : ''}
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default MyApp;
