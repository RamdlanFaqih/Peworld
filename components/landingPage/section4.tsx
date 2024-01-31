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

interface TestimonialsProps {
  name: string;
  job: String;
  image: string;
  comment: String;
}

const testimonials: TestimonialsProps[] = [
  {
    name: "Ramdlan Faqih",
    job: "Fullstack Developer",
    comment:
      "Sebelum daftar Peworld, saya susah dapat pekerjaan. Setelah daftar saya langsung dapat pekerjaan",
    image: "/img/ramfaq.png",
  },
  {
    name: "Tom Hardy",
    job: "Fullstack Developer",
    comment:
      "Sebelum daftar Peworld, saya susah dapat pekerjaan. Setelah daftar saya langsung dapat pekerjaan",
    image: "/img/tomHardy.jpg",
  },
  {
    name: "Frank Flores",
    job: "Fullstack Developer",
    comment:
      "Sebelum daftar Peworld, saya susah dapat pekerjaan. Setelah daftar saya langsung dapat pekerjaan",
    image: "/img/frankFlores.jpg",
  },
  {
    name: "Natasha",
    job: "Fullstack Developer",
    comment:
      "Sebelum daftar Peworld, saya susah dapat pekerjaan. Setelah daftar saya langsung dapat pekerjaan",
    image: "/img/img2.png",
  },
];

const font = Open_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

export const Section4 = () => {
  return (
    <div className="flex flex-wrap min-h-screen items-center justify-center">
      <div className="w-full">
        <h1 className={cn("text-center text-4xl", font.className)}>
          Their opinion about peworld
        </h1>
        <div className="flex items-center justify-center mt-10">
          <Carousel opts={{
            align: "start"
          }} className="w-full max-w-5xl">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <CardWrapper
                    name={testimonial.name}
                    job={testimonial.job}
                    comment={testimonial.comment}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill={true}
                      className="rounded-full object-cover"
                    />
                  </CardWrapper>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
