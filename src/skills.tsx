import "./style.css";
import Marquee from "react-fast-marquee";
import img1 from "./assets/logo-html-5-256.png";
import img2 from "./assets/logo-css-3-256.png";
import img3 from "./assets/logo-javascript-256.png";
import img4 from "./assets/logo-php-256.png";
import img5 from "./assets/typescript-256.png";
import img6 from "./assets/logo-laravel-256.png";
import img7 from "./assets/logo-react-256.png";
import img8 from "./assets/bootstrap-256.png";
import img9 from "./assets/codeigniter-logo_brandlogos.net_ydmii.png";

function Skills() {
  return (
    <div className="relative w-screen h-screen bg-[#d414e4]">
      {/* SVG Wave at the Top */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="white"
            fillOpacity="1"
            d="M0,96L80,122.7C160,149,320,203,480,186.7C640,171,800,85,960,53.3C1120,21,1280,43,1360,53.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>

      {/* Content Section Below */}
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-yellow-200 text-4xl font-bold">SKILLS</h1>
        <div className="w-full max-w-3xl mt-20">
          <Marquee
            pauseOnHover
            speed={80}
            gradient={false}
            className="flex items-center"
          >
            {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img1, img2, img3, img4, img5, img6, img7, img8, img9].map((img, index) => (
              <img key={index} src={img} alt={`Skill ${index + 1}`} className="marquee-image" style={{width: '120px'}}/>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;
