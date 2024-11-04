import About from "@/components/about";
import Exp from "@/components/exp";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Image from "next/image";
import 'remixicon/fonts/remixicon.css';

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Exp/>
      <Skills/>
    </div>
    
  )
}
