import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import '../public/css/whatsapp-button.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ShopVix - Your Store Vitrine',
  description: 'Showcase your store with ShopVix, the ultimate Webflow template for e-commerce.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <div className="whatsapp-float">
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}