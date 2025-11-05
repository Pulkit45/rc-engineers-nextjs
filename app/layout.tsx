import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R&C Engineers and Associates",
  description: "A perfect lifeline for steam turbine — R&C Engineers and Associates",
  icons: {
    icon: [
      { url: '/images/favicon.ico', sizes: 'any' },
      { url: '/images/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/images/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
