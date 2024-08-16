import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from "./components/header";
import Footer from "./components/footer";
config.autoAddCss = false



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  keywords: ["nextjs", "react", "web development"],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  creator: "Your Name or Company",
  publisher: "Your Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        <main className="w-screen h-screen bg-landing-image bg-fixed bg-cover flex justify-center items-center">
          <div className="bg-neutral-900 bg-opacity-30 fixed left-0 top-0 right-0 z-10 w-screen h-screen"></div> {/* opacity overlay for bakcground image */}
          {children}
        </main>
      <Footer />
      </body>
    </html>
  );
}
