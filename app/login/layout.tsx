import { AuthProvider, Footer, Navbar, ThemeProviders } from '@/components';
import '../../app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProviders>
            {/* <header className="max-w-7xl mx-auto">
              <Navbar />
            </header> */}
            <main className="max-w-7xl mx-auto">{children}</main>
            {/* <footer className=" border-t-2">
              <Footer />
            </footer> */}
          </ThemeProviders>
        </AuthProvider>
      </body>
    </html>
  );
}
