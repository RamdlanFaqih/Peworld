import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Open_Sans } from "next/font/google";
  import { cn } from "@/lib/utils";
  import React from "react";
  
  const font = Open_Sans({
    subsets: ["latin"],
    weight: ["600"],
  });
  
  interface CardWrapperProps {
    children: React.ReactNode;
    name: String;
    job: String;
    comment: String;
  }
  
  export const CardWrapper = ({
    children,
    name,
    job,
    comment,
  }: CardWrapperProps) => {
    return (
      <Card className="max-w-[339px] h-[437px] rounded-none">
        <CardHeader className="flex items-center">
          <div className="relative w-[120px] h-[120px]">
            {children}
          </div>
          <CardTitle className={cn("text-[30px] pt-5", font.className)}>
            {name}
          </CardTitle>
          <CardDescription className="text-[18px]">{job}</CardDescription>
        </CardHeader>
        <CardContent className="text-center px-16">
          <p>{comment}</p>
        </CardContent>
      </Card>
    );
  };
  