
import { Geist_Mono } from 'next/font/google';
import './globals.css';

// const geistSans = Geist({
//   subsets: ['latin']
// });

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500']
});

export const metadata = {
  title: 'Fausto Savoya',
  description: 'Portafolio Fausto Savoya'
};

export default function RootLayout({
  children,
  params
}) {
  return (
    <html lang={params.lang}>
      <body
        className={`${geistMono.className} grid place-content-center  font-light  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
