import type { AppProps } from 'next/app';
import { ThemeHookProvider } from '../src/theme/Theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeHookProvider >
      <Component {...pageProps} />
    </ThemeHookProvider>
  )
}
