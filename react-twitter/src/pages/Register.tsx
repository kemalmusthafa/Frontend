import React from "react";
import Logo from "../assets/rb_45418.png"
import Google from "../assets/7123025_logo_google_g_icon.png"
import Apple from "../assets/104490_apple_icon.png"

function Register() {
  return (
    <body className="bg-black w-[650px] h-[550px] rounded-md text-white">
      <div className="flex flex-1 flex-col justify-center items-center gap-10">
        <img src={Logo} alt="X" style={{ width: 50 }} />
      </div>
      <div className="text-white flex flex-1 flex-col justify-center items-center gap-5">
        <div className="font-bold">
          <h1>Masuk ke X</h1>
        </div>
        <div>
          <button className="bg-white hover:bg-slate-100 border border-black rounded-full flex justify-center items-center space-x-2 p-2 w-[400px]">
            <span className="font-bold text-sm text-black group-hover:text-black">
              Masuk dengan Google
            </span>
            <img src={Google} alt="google" className="w-5 h-5" />
          </button>
        </div>
        <div>
          <button className="bg-white hover:bg-slate-100 border border-black rounded-full flex justify-center items-center space-x-2 p-2 w-[400px]">
            <span className="font-bold text-sm text-black group-hover:text-black">
              Masuk dengan Apple
            </span>
            <img src={Apple} alt="google" className="w-5 h-5" />
          </button>
        </div>
        <input
          placeholder="Nomor telepon, email, atau nama pengguna"
          type="text"
          className="border border-white rounded-md flex items-center space-x-2 p-2 w-[400px]"
        />
        <input
          placeholder="Password"
          type="text"
          className="border border-white rounded-md flex items-center space-x-2 p-2 w-[400px]"
        />
        <div className="group">
          <button className="bg-black group-hover:bg-slate-100 border border-white rounded-full flex justify-center items-center space-x-2 p-2 w-[400px]">
            <span className="font-bold text-sm text-white group-hover:text-black">
              Berikutnya
            </span>
          </button>
        </div>
        <div className="group">
          <button className="bg-black group-hover:bg-slate-100 border border-white rounded-full flex justify-center items-center space-x-2 p-2 w-[400px]">
            <span className="font-bold text-sm text-white group-hover:text-black ">
              Lupa kata sandi ?
            </span>
          </button>
        </div>
        <div>
          <p>
            Belum punya akun ? <span className="text-blue-600">Daftar</span>
          </p>
        </div>
      </div>
    </body>
  );
}

export default Register;
