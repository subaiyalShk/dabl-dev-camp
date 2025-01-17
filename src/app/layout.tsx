
import type { Metadata } from "next";
import { Inter as FontSans } from 'next/font/google';
import "./globals.css";
import { Web3Provider } from "@/providers/web3Provider";
import { GlobalStateProvider } from '@/providers/globalStateProvider';
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Swapper App",
  description: "Just swap it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased', fontSans.variable
      )}>
          <Web3Provider>
            <GlobalStateProvider>
              <Theme 
                // appearance="dark"
                accentColor="cyan"
                grayColor="mauve"
                radius="medium"
                scaling="100%"
              >
                {children}
              </Theme>
            </GlobalStateProvider>
          </Web3Provider>
          <Toaster richColors/>
      </body>
    </html>
  );
}
