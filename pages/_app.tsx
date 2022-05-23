import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthContextProvider } from '../context/AuthContext';
import { Toaster } from 'react-hot-toast';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#333333" />
        {/* added */}
      </Head>
      <PayPalScriptProvider
        options={{
          'client-id':
            'AUdO8mJ2lpUz5WjQGJFzekDulglra3coIiGSFlskxKhDxEra3n4hJ_oNlpz77b8GD3sIJ-IDNPbySwVZ&disable-funding=credit,card',
          currency: 'PHP',
        }}
      >
        <AuthContextProvider>
          <Toaster />
          <Component {...pageProps} />
        </AuthContextProvider>
      </PayPalScriptProvider>
    </>
  );
}

export default MyApp;
