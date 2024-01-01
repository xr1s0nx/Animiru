"use client";

import { Roboto } from "next/font/google";
import "./globals.scss";
import Navbar from "@/Components/Navbar";
import Header from "@/Components/Header/Header";
import React from "react";
import Loading from "./loading";
import LoginModal from "@/Components/LoginModal/LoginModal";
import StoreProvider from "./StoreProvider";
import MessageBox from "@/Components/MessageBox/MessageBox";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = React.useState(true);
  const [signModal, setSignModal] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });

  return (
    <html lang="en">
      <body className={`${roboto.className} transition-colors duration-300`}>
        <StoreProvider>
          {loading ? (
            <Loading />
          ) : (
            <div className="main-layout flex align-start">
              {signModal && <LoginModal onClose={() => setSignModal(false)} />}
              <Navbar />
              <main className="min-h-screen max-h-screen overflow-auto text--colors_default bg--default w-full px-[10px] py-[10px] pt-[80px]">
                <Header setSignModal={() => setSignModal(true)} />
                {children}
              </main>
            </div>
          )}
          <MessageBox />
        </StoreProvider>
      </body>
    </html>
  );
}
