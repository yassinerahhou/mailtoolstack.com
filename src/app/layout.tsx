import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieNotice } from '@/components/CookieNotice';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = 'https://emailtoolspro.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Email Tools Pro — Free Gmail & Email Utilities',
    template: '%s | Email Tools Pro',
  },
  description:
    'Free professional email tools — Gmail Dot Generator, Plus Generator, Email Validator, Email Extractor, Disposable Email Checker, and more. Fast, private, no signup required.',
  keywords: [
    'email tools',
    'gmail dot generator',
    'gmail plus generator',
    'email validator',
    'email extractor',
    'disposable email checker',
    'email permutation generator',
    'random gmail generator',
    'email cleaner',
    'username generator',
  ],
  authors: [{ name: 'Email Tools Pro' }],
  creator: 'Email Tools Pro',
  publisher: 'Email Tools Pro',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Email Tools Pro',
    title: 'Email Tools Pro — Free Gmail & Email Utilities',
    description:
      'Free professional email tools — Gmail Dot Generator, Plus Generator, Email Validator, Email Extractor, Disposable Email Checker, and more.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Email Tools Pro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Email Tools Pro — Free Gmail & Email Utilities',
    description:
      'Free professional email tools — Gmail Dot Generator, Plus Generator, Email Validator, and more. No signup required.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6652677798942334"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieNotice />
        </ThemeProvider>
      </body>
    </html>
  );
}
