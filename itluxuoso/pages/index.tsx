import Image from "next/image";
import { Inter } from "@next/font/google";
import itluxuosologo from "../public/logo.svg";
import instagramlogo from "../public/instagram.png";
import mail from "../public/mail.png";
import styles from "@/styles/Home.module.css";

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
      {}
      <p className="text-white ">En cours de construction...</p>
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
        <p className="text-white mb-3 lg:mb-5">
          Vous souhaitez en savoir plus ?
        </p>
        <a
          href="mailto:itluxuoso@gmail.com"
          className="flex flex-row flex-nowrap items-center bg-white px-10 py-2 rounded-sm"
        >
          <p className=" text-black t">Contactez-nous</p>
          <Image src={mail} alt="mail icone" className="w-5 ml-4" />
        </a>
      </div>
    </div>
  );
}
