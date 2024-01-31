import { CardWrapper } from "./card-wrapper";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

import Img2 from "@/public/img/img2.png";
import Ramfaq from "@/public/img/ramfaq.png"
import TomHardy from "@/public/img/tomHardy.jpg"
import FrankFlores from "@/public/img/frankFlores.jpg"

const font = Open_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Section4() {
  return (
    <div className="flex flex-wrap min-h-screen items-center justify-center">
      <div className="w-full">
        <h1 className={cn("text-center text-4xl", font.className)}>
          Their opinion about peworld
        </h1>
        <div className="flex items-center justify-center mt-10">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <CardWrapper
                  name="Ramdlan Faqih"
                  job="Fullstack Developer"
                  comment="Sebelum daftar Peworld, saya susah dapat pekerjaan. Setelah daftar saya langsung dapat pekerjaan"
                >
                  <Image
                    src={Ramfaq}
                    alt="Ramdlan Faqih Profile"
                    layout="fill"
                    className="rounded-full"
                  />
                </CardWrapper>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <CardWrapper
                  name="Frank Flores"
                  job="Hiring Manager"
                  comment="Peworld memudahkan saya untuk mencari orang yang tepat untuk bisa bergabung di perusahaan"
                >
                  <Image
                    src={FrankFlores}
                    alt="Frank Flores Profile"
                    layout="fill"
                    className="rounded-full object-cover"
                  />
                </CardWrapper>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <CardWrapper
                  name="Tom Hardy"
                  job="Frontend Developer"
                  comment="Saya hanya perlu menampilkan Portofolio dan Pengalaman kerja saya di Peworld. Setelah itu saya mendapatkan banyak tawaran pekerjaan"
                >
                  <Image
                    src={TomHardy}
                    alt="Tom Hardy Profile"
                    layout="fill"
                    className="rounded-full object-cover"
                  />
                </CardWrapper>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <CardWrapper
                  name="Natasha"
                  job="Web Developer"
                  comment="Platform terbaik untuk menghubungkan Pencari Kerja dan Perekrut"
                >
                  <Image
                    src={Img2}
                    alt="2323"
                    layout="fill"
                    className="rounded-full"
                  />
                </CardWrapper>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
