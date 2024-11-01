import "./styles.css";
import Logo from "./assets/rb_45418.png";
import Direct from "./components/Direct";

function App() {
  return (
    <div className="bg-black min-h-screen w-screen text-white flex flex-col lg:flex-row">
      {/* Left side - Logo */}
      <div className="flex flex-1 justify-center items-center">
        <img
          src={Logo}
          alt="X"
          className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] w-full"
        />
      </div>

      {/* Right side - Text and Direct component */}
      <div className="flex flex-1 flex-col justify-center items-center md:items-start gap-5 p-5 lg:mt-20">
        <div className="text-3xl md:text-5xl lg:text-6xl font-bold">
          <h1>Sedang tren saat ini</h1>
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl font-bold">
          <h2>Bergabunglah sekarang.</h2>
        </div>
        <Direct />
      </div>
    </div>
  );
}

export default App;
