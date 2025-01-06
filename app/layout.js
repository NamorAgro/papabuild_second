import { Rubik } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";


const rubikFont = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
})

export const metadata = {
  title: "Строительство, сварочные и ремонтные работы — недорого и качественно",
  description: "Ознакомьтесь с ценами на профессиональные строительные, сварочные и ремонтные работы. Постройка бань, изготовление металлоконструкций, ремонтные услуги — всё по доступным ценам и с гарантией качества.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${rubikFont.className}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
