import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import Script from "next/script";
import Footer from "./components/layout/Footer";

const poppins = Poppins({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Travel App",
  description: "Travel app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} d-flex flex-column min-vh-100`}>
        <Navbar />
        {children}
        <Footer />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
