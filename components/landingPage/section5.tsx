import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const font = Open_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Section5() {
  return (
    <div className="flex flex-wrap min-h-screen items-center justify-center">
      <div
        className={cn(
          "w-full flex items-center justify-between px-16 bg-[#5E50A1] h-72 rounded-xl rounded-tl-[40px] rounded-br-[40px]",
          font.className
        )}
      >
        <h1 className="text-white text-3xl w-64 leading-normal">
          Lorem Ipsum Dolor Sit amet
        </h1>
        <Button
            variant="outline"
            className="py-8 px-6 font-bold">
                Mulai Dari Sekarang
            </Button>
      </div>
    </div>
  );
}
