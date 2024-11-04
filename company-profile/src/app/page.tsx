import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import NavbarTop from "@/components/navbar-top";

export default function Home() {
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col">
        <NavbarTop/>
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
