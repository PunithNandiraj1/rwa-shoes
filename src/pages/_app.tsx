import { ReactNode, Suspense } from 'react';
import { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import { NextUIProvider } from '@nextui-org/system';

import ErrorBoundary from '@/components/ErrorBoundary';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import Web3Provider from '@/providers/Web3Provider';


import "../styles/globals.css";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--roboto-font',
});

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <main className={`${roboto.className} mx-auto max-w-[var(--max-width)] min-h-screen flex flex-col justify-between`}>
      <Suspense fallback={<Loading />}>
        <Web3Provider>
          <NextUIProvider>
            <ErrorBoundary>
              <div className="mx-auto">
                <Header />
                <Component {...pageProps} />
                <Footer />
              </div>
            </ErrorBoundary>
          </NextUIProvider>
        </Web3Provider>
      </Suspense>
    </main>
  );
}

export default MyApp;
