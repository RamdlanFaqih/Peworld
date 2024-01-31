import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Img2 from "@/public/img/img2.png";
import { FaCheckCircle } from "react-icons/fa";

const font = Open_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

export const Section2 = () => {
  return (
    <div className="flex flex-wrap min-h-screen items-center justify-center">
      <div className="w-full px-4 lg:w-1/2">
        <div className="relative w-[496px] h-[389px] mx-auto lg:mx-0">
          <Image src={Img2} layout="fill" alt="image2" className="z-10" />
          <div className="absolute w-full h-full bg-[#E2E5ED] rotate-12"></div>
          <div className="absolute w-24 h-24 bg-[#5E50A1] -top-5 -left-5 z-20"></div>
        </div>
      </div>
      <div className="w-full px-4 lg:w-1/2">
        <div className="mx-auto lg-mx:0">
          <h1
            className={cn(
              "text-[36px] text-dark leading-normal",
              font.className
            )}
          >
            Kenapa harus mencari talent di Peworld ?
          </h1>
          <div className="flex flex-col mt-9 gap-7">
            <div className="flex gap-2 items-center">
              <span>
                <FaCheckCircle color="#5E50A1" fontSize={24} />
              </span>
              <h4 className="text-md">
                Menjangkau banyak calon talenta dari berbagai bidang
                pemrograman.
              </h4>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <FaCheckCircle color="#5E50A1" fontSize={24} />
              </span>
              <h4 className="text-md">
                Informasi Profil yang lengkap
              </h4>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <FaCheckCircle color="#5E50A1" fontSize={24} />
              </span>
              <h4 className="text-md">
                Proses Rekrutmen yang efisien
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
