import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthContextProvider } from '../context/AuthContext';
import { Toaster } from 'react-hot-toast';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // AUdO8mJ2lpUz5WjQGJFzekDulglra3coIiGSFlskxKhDxEra3n4hJ_oNlpz77b8GD3sIJ-IDNPbySwVZ
    <PayPalScriptProvider
      options={{
        'client-id':
          'AUdO8mJ2lpUz5WjQGJFzekDulglra3coIiGSFlskxKhDxEra3n4hJ_oNlpz77b8GD3sIJ-IDNPbySwVZ',
          currency: 'PHP'
      }}
    >
      <AuthContextProvider>
        <Toaster />
        <Component {...pageProps} />
      </AuthContextProvider>
    </PayPalScriptProvider>
  );
}

export default MyApp;
