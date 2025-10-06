import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aravind Manoj | Data & AI Engineer',
  description: 'Building enterprise intelligent systems and AI assistants for compliance, automation, and insight. Passionate M.Sc. Data Science student with hands-on experience developing AI-powered solutions.',
  keywords: ['Data Science', 'AI Engineer', 'Machine Learning', 'NLP', 'Automation', 'Python', 'LLMs', 'Data Engineering'],
  authors: [{ name: 'Aravind Manoj' }],
  creator: 'Aravind Manoj',
  publisher: 'Aravind Manoj',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aravindmanoj.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aravind Manoj | Data & AI Engineer',
    description: 'Building enterprise intelligent systems and AI assistants for compliance, automation, and insight.',
    url: 'https://aravindmanoj.dev',
    siteName: 'Aravind Manoj Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aravind Manoj - Data & AI Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aravind Manoj | Data & AI Engineer',
    description: 'Building enterprise intelligent systems and AI assistants for compliance, automation, and insight.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#06b6d4" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}