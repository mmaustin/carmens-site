import { Newsreader } from "next/font/google"
import "./globals.css";
import Header from "@/components/Header";


const newsReader = Newsreader({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-newsReader"
});

export const metadata = {
  title: "Carmen",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${newsReader.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
