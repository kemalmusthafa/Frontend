import Image from "next/image"

function About() {
    return (
      <div className="relative bg-[#0b1e5e] w-screen min-h-screen flex flex-col items-center gap-10 p-5" id="about">
        {/* About Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow-200 mb-5 mt-20">ABOUT</h1>
        </div>
  
        {/* Logo Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-20">
          {/* Logo Unjani */}
          <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[155px] overflow-hidden shadow-lg rounded-lg">
            <Image
              src="/img/LogoUnjani.png"
              alt="LogoUnjani"
              className="w-full h-full object-cover"
              height={200}
              width={200}
            />
          </div>
  
          {/* Purwadhika Logo */}
          <div className=" w-80 h-20 md:w-[300px] md:h-[100px] overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/img/purwadhika.png"
              alt="Purwadhika"
              className="w-full h-full object-cover"
              height={200}
              width={200}
            />
          </div>
        </div>
  
        {/* SVG Wave at the Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" id="exp">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-[150px] md:h-[200px]"
          >
            <path
              fill="white"
              fillOpacity="1"
              d="M0,96L80,122.7C160,149,320,203,480,186.7C640,171,800,85,960,53.3C1120,21,1280,43,1360,53.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
      </div>
    );
  }
  
  export default About;