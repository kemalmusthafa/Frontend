import "./style.css";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar bg-base-100 fixed z-50 justify-between px-4 sm:px-20 box-border">
            <div className="flex justify-between items-center w-full">
                <div>
                    <a className="btn btn-ghost text-xl font-bold">SNCTRY. MSTH</a>
                </div>
                {/* Hamburger Icon for Mobile */}
                <button
                    className="btn btn-ghost text-xl font-medium sm:hidden ml-14"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '✖' : '☰'}
                </button>
            </div>
            {/* Navigation Buttons */}
            <div className={`flex flex-col items-center ${isOpen ? 'block' : 'hidden'} sm:flex sm:flex-row sm:space-x-4`}>
                <button className="btn btn-ghost text-xl font-medium">ABOUT</button>
                <button className="btn btn-ghost text-xl font-medium">STATS</button>
                <button className="btn btn-ghost text-xl font-medium">CONTACT</button>
            </div>
        </div>
    );
}

export default Navbar;
