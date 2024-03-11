import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fremtind Pacman",
  description: "Spill Pacman på storskjermen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex,nofollow" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        {/* eslint-disable-next-line */}
        <link
          href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body >{children}</body>
    </html>
  );
}
