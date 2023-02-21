import Image from "next/image";
import { Inter } from "@next/font/google";
import itluxuosologo from "../public/logo.svg";
import instagramlogo from "../public/instagram.png";
import mail from "../public/mail.png";
import styles from "@/styles/Home.module.css";



import { Loading, Grid } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // let addPoint = function (last: string) {
  //   last += ".";
  // };

  // let pointsSuspention = function (value: string) {
  //   while(true) {
  //   let timer = setTimeout("addPoint(value)", 1000);
  //   }

  // };
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-tropicalflou bg-center bg-no-repeat text-base md:text-lg lg:text-xl">
      <div className="flex relative flex-row justify-center flex-nowrap">
        <p className="text-white ">En cours de construction</p>

        <Loading
          type="points-opacity"
          className="e absolute bottom-1 ml-4 mt-3 text-green-100"
          color="currentColor"
          size="lg"
        />
      </div>
      <a
        href="https://www.instagram.com/itluxuoso/"
        className="flex relative items-center justify-center rounded-sm w-3/4 max-w-[335px] h-44 bg-tropical bg-cover bg-center bg-no-repeat my-16 md:h-72 md:max-w-[600px] lg:h-96 lg:w-[900px] "
      >
        <Image src={itluxuosologo} alt="IT Luxuoso logo" className="w-3/4" />
        <Image
          src={instagramlogo}
          alt="Instagram logo"
          className="w-3/4 absolute bottom-5 w-7 md:bottom-7 md:w-8"
        />
      </a>

      <div className="flex flex-col">
        <p className="text-white text-lg mb-4 lg:mb-5">
          Vous souhaitez en savoir plus ?
        </p>

        <a
          href="mailto:itluxuoso@gmail.com"
          className="flex flex-nowrap justify-center items-center"
        >
          <div className="flex flex-nowrap justify-center items-center bg-slate-800 px-2 py-1.5 rounded-sm">
            <p className=" text-white ">Contactez-nous</p>
          </div>
        </a>
      </div>
    </div>
  );
}
  