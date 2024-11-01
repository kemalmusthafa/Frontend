import React from "react";
import Logo from "../assets/rb_45418.png";
import Google from "../assets/7123025_logo_google_g_icon.png";
import Apple from "../assets/104490_apple_icon.png";

function Login() {
  return (
    <div className="bg-zinc-950 w-full max-w-lg mx-auto px-4 py-5 rounded-md text-white">
      <div className="flex flex-col items-center gap-5">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={Logo} alt="X" className="w-12 h-12" />
        </div>
        
        {/* Header Text */}
        <div className="font-bold text-center">
          <h1 className="text-xl md:text-2xl">Masuk ke X</h1>
        </div>

        {/* Buttons */}
        <button className="bg-white hover:bg-slate-100 border border-black rounded-full flex justify-center items-center space-x-2 py-2 w-full max-w-[300px]">
          <span className="font-bold text-sm text-black">Masuk dengan Google</span>
          <img src={Google} alt="Google" className="w-5 h-5" />
        </button>

        <button className="bg-white hover:bg-slate-100 border border-black rounded-full flex justify-center items-center space-x-2 py-2 w-full max-w-[300px]">
          <span className="font-bold text-sm text-black">Masuk dengan Apple</span>
          <img src={Apple} alt="Apple" className="w-5 h-5" />
        </button>

        {/* Input Fields */}
        <input
          placeholder="Nomor telepon, email, atau nama pengguna"
          type="text"
          className="border border-white rounded-md p-2 w-full max-w-[300px] bg-transparent placeholder-gray-400"
        />
        <input
          placeholder="Password"
          type="password"
          className="border border-white rounded-md p-2 w-full max-w-[300px] bg-transparent placeholder-gray-400"
        />

        {/* Next Button */}
        <button className="bg-white hover:bg-slate-100 border border-white rounded-full flex justify-center items-center py-2 w-full max-w-[300px]">
          <span className="font-bold text-sm text-black">Berikutnya</span>
        </button>

        {/* Forgot Password Button */}
        <button className="bg-black hover:bg-slate-100 border border-white rounded-full flex justify-center items-center py-2 w-full max-w-[300px]">
          <span className="font-bold text-sm text-white hover:text-black">
            Lupa kata sandi?
          </span>
        </button>

        {/* Signup Prompt */}
        <p className="text-center">
          Belum punya akun? <span className="text-blue-600 cursor-pointer">Daftar</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
