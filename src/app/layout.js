import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { Poppins } from "next/font/google";

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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
