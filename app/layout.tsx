import { Josefin_Sans } from 'next/font/google';
import { Header } from '@/components/header';

import './globals.scss';

const josefin = Josefin_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
});
interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: 'Todo App',
  description: 'This is awesome todo app',
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" className={josefin.className}>
    <body data-theme="light">
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
