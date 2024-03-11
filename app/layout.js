import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "./components/Navbar/TopNavbar";
import BottomNavbar from "./components/Navbar/BottomNavbar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kinematica",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavbar />
        <BottomNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}