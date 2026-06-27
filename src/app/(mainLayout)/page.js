import Stats from "@/Components/Stats";
import HeroSec from "@/Components/HeroSec";
import ScrollProgress from "@/Components/ScrollProgress";
import WhyChoose from "@/Components/WhyChose";
import Demands from "@/Components/Demands";
import Testimonials from "@/Components/Testimonials";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <HeroSec></HeroSec>
        <Stats />
        <WhyChoose />
        <Demands />
        <Testimonials />
      </div>
    </>
  );
}
