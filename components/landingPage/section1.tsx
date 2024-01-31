import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Img1 from "@/public/img/img1.png";
import { Button } from "../ui/button";

const font = Open_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

export const Section1 = () => {
  return (
    <div className="flex flex-wrap min-h-screen items-center justify-center">
      <div className="w-full px-4 lg:w-1/2">
        <div className="w-[490px] mx-auto lg:mx-0">
          <h1
            className={cn(
              "text-[40px] text-dark leading-normal",
              font.className
            )}
          >
            Talenta terbaik negeri untuk perusahaan revolusi 4.0
          </h1>
          <p
            className={cn(
              "text-lg pt-5 leading-normal text-dark font-light"
            )}
          >
            Peworld dapat membantu Anda menemukan orang yang tepat untuk tim
            Anda.
          </p>
          <div className="pt-5">
            <Button
              variant="primary"
              className={cn("py-8 px-6 font-bold", font.className)}
            >
              Mulai dari sekarang
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full px-4 lg:w-1/2">
        <div className="relative w-[500px] h-[500px] mx-auto">
          <Image src={Img1} layout="fill" alt="image1" className="z-10" />
          <div className="absolute w-[510px] h-[500px] bg-[#E2E5ED] -rotate-12"></div>
          <div className="absolute w-28 h-28 bg-[#5E50A1] z-10 -bottom-5 -left-5"></div>
          <div className="absolute w-12 h-12 bg-[#FBB017] z-20 -bottom-9 left-14"></div>
        </div>
      </div>
    </div>
  );
}
