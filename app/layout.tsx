import './globals.css';
import { Montserrat } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: 'Nexus Web Studio | Creative Web Development Agency',
  description: 'We craft exceptional digital experiences through innovative web development, design, and 3D interactions.',
  keywords: 'web development, web design, 3D interactions, digital agency, responsive websites',
  authors: [{ name: 'Nexus Web Studio' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
      </head>
      <body className={montserrat.className}>
        <Cursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}