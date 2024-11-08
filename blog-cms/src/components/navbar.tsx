import Link from "next/link";
import Wrapper from "./wrapper";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-white h-[60px] sticky top-0 z-10 justify-between shadow-md">
      <nav>
        <Wrapper>
          <Link href={"/"} className="text-2xl">
            <Image
              src="/reddit-seeklogo.svg"
              alt="reddit"
              width={100}
              height={100}
            ></Image>
          </Link>
          <div className="flex flex-row gap-10">
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
          <Link href={"/"} className="text-2xl">
            <Image
              src={"/icons8-search.svg"}
              alt="search"
              width={20}
              height={20}
            ></Image>
          </Link>
        </Wrapper>
      </nav>
    </div>
  );
}
