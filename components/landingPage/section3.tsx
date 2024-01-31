import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Img3 from "@/public/img/img3.png";
import { FaCheckCircle } from "react-icons/fa";

const font = Open_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

interface Skill {
  skill: string;
}

const skills: Skill[] = [
  { skill: "Java" },
  { skill: "Kotlin" },
  { skill: "PHP" },
  { skill: "Javascript" },
  { skill: "Golang" },
  { skill: "C++" },
  { skill: "Ruby" },
  { skill: "10 + Bahasa lainnya" },
];

export default function Section3() {
  return (
    <div className="flex flex-wrap min-h-screen items-center justify-center">
      <div className="w-full px-4 lg:w-1/2">
        <div className="mx-auto lg:mx-0">
          <h1
            className={cn(
              "text-[36px] text-dark leading-normal",
              font.className
            )}
          >
            Skill Talent
          </h1>
          <h4 className="text-md pt-3">
          Terdiri dari individu yang mahir dalam berbagai bahasa pemrograman
          </h4>
          <div className="grid grid-rows-4 grid-flow-col gap-7 pt-5">
            {skills.map((skills) => (
              <div className="flex gap-2 items-center" key={skills.skill}>
                <span>
                  <FaCheckCircle color="#FBB017" fontSize={24} />
                </span>
                <h4 className="text-md">{skills.skill}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full px-4 lg:w-1/2">
        <div className="relative w-[496px] h-[389px] mx-auto">
          <Image
           src={Img3}
           alt="foto"
           layout="fill"
           className="z-10"
           />
           <div className="absolute w-full h-full bg-[#E2E5ED] -rotate-12"></div>
           <div className="absolute w-24 h-24 bg-[#FBB017] -top-10 -right-5 z-20"></div>
        </div>
      </div>
    </div>
  );
}
