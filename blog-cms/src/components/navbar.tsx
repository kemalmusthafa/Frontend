import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-white w-full h-auto sticky top-0 z-10 shadow-md">
      <nav className="flex items-center justify-between p-4 sm:p-6 md:px-10 lg:px-28">
        <Link href={"/"} className="flex items-center text-2xl">
          <Image
            src="/reddit-seeklogo.svg"
            alt="reddit"
            width={100}
            height={100}
          />
        </Link>
        <div className="hidden md:flex flex-row gap-6 md:gap-8 lg:gap-10 text-base lg:text-lg">
          <Link href={"/"} className="hover:text-slate-500">
            Beranda
          </Link>
          <Link href={"/"} className="hover:text-slate-500">
            Berita
          </Link>
          <Link href={"/"} className="hover:text-slate-500">
            Blog
          </Link>
        </div>
        <Link href={"/"} className="flex items-center text-2xl">
          <Image
            src="/icons8-search.svg"
            alt="search"
            width={20}
            height={20}
            className="w-5 h-5 md:w-6 md:h-6"
          />
        </Link>
      </nav>
    </div>
  );
}
