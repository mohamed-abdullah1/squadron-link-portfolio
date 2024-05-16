import { Inter } from "next/font/google";
import "../globals.css";
import TransitionProvider from "../components/transitionProvider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Squadron Link",
  description: "Generated by create next app",
};
function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${inter.className} bg-gradient-to-b to-red-50  from-blue-100  `}
      >
        <TransitionProvider inter={inter}>{children}</TransitionProvider>
      </body>
    </html>
  );
}
export default RootLayout;