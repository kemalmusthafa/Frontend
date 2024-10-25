import About from "./about";
import Hero from "./hero";
import Exp from "./exp";
import Skills from "./skills";
import Stats from "./stats";

function Body() {
  return (
    <div className="m-0 p-0 w-screen min-h-screen bg-[#0b1e5e] flex flex-col items-center overflow-hidden">
      <Hero />
      <About />
      <Exp />
      <Skills />
      <Stats />
    </div>
  );
}

export default Body;
