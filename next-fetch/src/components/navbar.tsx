import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-black h-[60px] flex justify-center items-center gap-5 text-white">
            <Link href={"/"}>Home</Link>
            <Link href={"/user"}>User</Link>
            <Link href={"/user/register"}>Register</Link>
        </div>
    )
}