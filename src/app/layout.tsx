import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: '유백무역 - K-뷰티를 세계로, 라이브로 연결하다',
  description: '원청라인 및 총판 가격 절감 후, 화장품, 건식, 악세사리, 가방, 잡화 등의 물류를 국내 및 글로벌 수출 도·소매 유통과 수출 무역하는 전문 기업입니다.',
  keywords: 'K-뷰티, 화장품 수출, 라이브커머스, 글로벌 무역, 디올, 샤넬, 유백무역',
  authors: [{ name: '유백무역' }],
  creator: '유백무역',
  publisher: '유백무역',
  openGraph: {
    title: '유백무역 - K-뷰티를 세계로, 라이브로 연결하다',
    description: '30+ 프리미엄 브랜드와 함께하는 글로벌 K-뷰티 수출 전문기업',
    url: 'https://ubaek-trade.com',
    siteName: '유백무역',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '유백무역 - K-뷰티 글로벌 수출 전문기업',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '유백무역 - K-뷰티를 세계로, 라이브로 연결하다',
    description: '30+ 프리미엄 브랜드와 함께하는 글로벌 K-뷰티 수출 전문기업',
    images: ['/og-image.jpg'],
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
    <html lang="ko" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link 
          rel="stylesheet" 
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" 
        />
      </head>
      <body className={`font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}