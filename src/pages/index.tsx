import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [previewScreenWinner, setPreviewScreenWinner] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPreviewScreenWinner(false);
  //   }, 3000);
  // }, []);

  return (
    <>
      {/* {previewScreenWinner && (
        <div className="w-full min-h-screen bg-gradient-to-b from-[#0D0F12] to-[#010101] flex flex-col items-center justify-center gap-20">
          <h2 className="text-[#E3E6E8] font-bold text-6xl">Cargando Podium</h2>
          <div className="line-wobble"></div>
        </div>
      )} */}
      {!previewScreenWinner && (
        <main className="w-full min-h-screen flex items-center justify-between bg-gradient-to-b from-[#0D0F12] to-[#010101]  flex-col pt-20 text-[#E3E6E8] relative">
          <header className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-7xl font-bold">
              Clo
              <span className="relative group/cloud">
                u
                <div className="absolute top-0 mx-auto left-0 right-0 overflow-hidden">
                  <Image
                    className="group-hover/cloud:translate-y-full transition-transform"
                    src="/logo.gif"
                    width={64}
                    height={64}
                    alt="logo"
                  />
                </div>
              </span>
              d Chat
            </h1>
            <h3 className="text-2xl text-gray-400 font-semibold">
              An Open Source Twitch Chat
            </h3>
          </header>
          <div className="flex items-start justify-center h-[65vh]">
            <input
              className="bg-[#FFFFFF26] py-2 px-5 placeholder:text-gray-400 text-[#E3E6E8] outline-none rounded-md"
              placeholder="Username"
            ></input>
          </div>
          <div className="absolute bottom-5 right-5">
            <small>
              Made by{" "}
              <a
                href="https://github.com/JeremyDevCode"
                target="_blank"
                className="text-[#F0F0F0] font-medium"
              >
                Jeremy ☁
              </a>
            </small>
          </div>
        </main>
      )}
    </>
  );
}
