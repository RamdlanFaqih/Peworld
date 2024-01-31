import { Footer } from "@/components/footer";
import { Section1 } from "@/components/landingPage/section1";
import { Section2 } from "@/components/landingPage/section2";
import { Section3 } from "@/components/landingPage/section3";
import { Section4 } from "@/components/landingPage/section4";
import { Section5 } from "@/components/landingPage/section5";

export default function LandingPage() {
  return (
    <div>
      <div className="container">
        <Section1 />
      </div>
      <div className="container">
        <Section2 />
      </div>
      <div className="container">
        <Section3 />
      </div>
      <div className="bg-[#FAFBFC]">
        <div className="container">
        <Section4 />
        </div>
      </div>
      <div className="container">
        <Section5 />
        </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
