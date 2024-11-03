import About from "@/components/about";
import Exp from "@/components/exp";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import Stats from "@/components/stats";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Exp/>
      <Skills/>
      <Stats/>
    </div>
    
  )
}
