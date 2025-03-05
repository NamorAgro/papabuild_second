import { Rubik } from "next/font/google";
import "./globals.css";


import Header from "@/components/header";

import CookieBanner from "@/components/cookieBanner";

import { GoogleAnalytics } from '@next/third-parties/google'

const rubikFont = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
})

export const metadata = {
  title: "Строительство, сварочные и ремонтные работы — хорошие цены",
  description: "Ознакомьтесь с ценами на профессиональные строительные, сварочные и ремонтные работы. Постройка бань, изготовление металлоконструкций, ремонтные услуги — всё по доступным ценам и с гарантией качества",
};

export default function RootLayout({ children }) {

    return (
      <html lang="ru">
        <body className={`${rubikFont.className}`}>
          <Header />
          {children}
          <GoogleAnalytics gaId="G-QMSH9NJFB4" />
          <CookieBanner/>
        </body>
      </html>
    );
}
