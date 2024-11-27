import localFont from "next/font/local";
import "./globals.css";
import Heder from "./components/header/page";
import Headermain from "./components/headerMain/page";
import Navbar from "./components/NavBar/page";
import Footer from "./components/footer/page";
import MobNavBar from "./components/MobNav/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Shopping App",
  description: "A shopping application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        < Heder />
        <Headermain />
        <Navbar />
        <MobNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
