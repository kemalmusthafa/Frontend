import "./style.css";
import banner from "./assets/bg.png";
import foto from "./assets/IMG_5170.png";

function Hero() {
  return (
    <div className="h-screen w-screen">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>

        <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start gap-10 text-neutral-content px-5 lg:px-20">
          <div className="w-48 h-48 sm:w-64 sm:h-64 overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={foto}
              className="w-full h-full object-cover"
              alt="Cropped Image"
            />
          </div>

          <div className="max-w-lg text-center lg:text-left">
            <h1 className="mb-10 text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-300 animate-bounce">
              Hello Fellas!
            </h1>
            <p className="mb-5 text-sm sm:text-base font-bold text-yellow-200">
              I am Kemal Musthafa a.k.a kemalmusth, sanctuary, msth., pronounce
              as He/him. Also professional student web dev at{" "}
              <span className="bg-[#0b1e5e] font-extrabold">Purwadhika Digital Technology School</span>
            </p>
            <button className="btn btn-accent font-extrabold animate-pulse">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
