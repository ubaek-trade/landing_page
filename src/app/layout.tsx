import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: '천강무역 - 글로벌 무역의 새로운 기준, 세계를 연결하다',
  description: '중공업급 글로벌 수출 인프라를 기반으로 화장품, 패션, 명품, 생활용품 등의 대규모 국제무역을 전담하는 종합 수출무역 전문기업입니다.',
  keywords: '글로벌 무역, 수출무역, 국제물류, 제조업 수출, 대률간 무역, 천강무역, 디지털 무역 플랫폼',
  authors: [{ name: '천강무역' }],
  creator: '천강무역',
  publisher: '천강무역',
  openGraph: {
    title: '천강무역 - 글로벌 무역의 새로운 기준, 세계를 연결하다',
    description: '30년간 축적된 노하우와 50+ 글로벌 파트너사와 함께하는 종합 수출무역 전문기업',
    url: 'https://cheongangtrade.com',
    siteName: '천강무역',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '천강무역 - 글로벌 수출무역 전문기업',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '천강무역 - 글로벌 무역의 새로운 기준, 세계를 연결하다',
    description: '30년간 축적된 노하우와 50+ 글로벌 파트너사와 함께하는 종합 수출무역 전문기업',
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
    google: '1f491af3c13f4155',
    other: {
      'naver-site-verification': 'cd414831ebb33fabb118192db49744651a3226a0',
    },
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