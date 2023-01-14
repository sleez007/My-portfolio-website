import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { ThemeHookProvider } from '../src/theme/Theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeHookProvider >
        <NextSeo
          title="Kingsley's Portfolio"
          description="Portfolio Website for Kingsley Etoka"
          canonical="https://kingsleyetoka.com"
          openGraph={{
            title: 'Kingsley Etoka',
            description: 'I\'m a Fullstack Web and Mobile App Developer With Over 6 years of experience building Industry Leading Web and Mobile App Solutions with next gen technologies.',
            url: 'https://kingsleyetoka.com',
            type: 'profile',
            profile: {
              firstName: 'Kingsley',
              lastName: 'Etoka',
              username: 'firstlast123',
              gender: 'male',
            },
            images: [
              {
                url: '../public/assets/images/kingsley.png',
                width: 850,
                height: 650,
                alt: 'Profile Photo',
              },
            ],
          }}
        />
      <Component {...pageProps} />
    </ThemeHookProvider>
  )
}
