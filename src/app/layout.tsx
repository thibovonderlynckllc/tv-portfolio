import { Sora } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const sora = Sora({
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Thibo Vonderlynck | Next.js Web Developer & UX Designer</title>
        <meta name="description" content="Thibo Vonderlynck is een ervaren Next.js web developer en UX designer. Bekijk zijn portfolio, projecten en skills. Samen bouwen aan jouw digitale succes!" />
      </Head>
      <body className={`${sora.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
