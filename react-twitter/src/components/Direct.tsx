import Logo from "../assets/rb_45418.png";
import Google from "../assets/7123025_logo_google_g_icon.png";
import Apple from "../assets/104490_apple_icon.png";
import Login from "../pages/Login";

function Direct() {
  return (
    <body className="bg-black w-full h-[450px] rounded-md text-black">
      <div className="text-black flex flex-1 flex-col justify-center items-center md:items-start gap-5">
        <div>
          <button className="bg-white hover:bg-slate-100 border border-black rounded-full flex justify-center items-center space-x-2 p-2 w-[300px]">
            <img src={Google} alt="google" className="w-5 h-5" />
            <span className="font-bold text-sm">Masuk dengan Google</span>
          </button>
        </div>
        <div>
          <button className="bg-white hover:bg-slate-100 border border-black rounded-full flex justify-center items-center space-x-2 p-2 w-[300px]">
            <img src={Apple} alt="google" className="w-5 h-5" />
            <span className="font-bold text-sm">Masuk dengan Apple</span>
          </button>
        </div>
        <div className="flex w-[300px] flex-col">
          <div className="divider divider-neutral text-white m-0 p-0">Atau</div>
        </div>
        <div className="group">
          <button className="bg-blue-600 hover:bg-blue-500 border border-black rounded-full flex justify-center items-center space-x-2 p-2 w-[300px]">
            <span className="font-bold text-sm text-white group-hover:text-white">
              Buat Akun
            </span>
          </button>
        </div>
        <div className="justify-center">
          <p className="text-xs text-gray-400 text-start">
            Dengan mendaftar, Anda menyetujui{" "}
            <span className="text-blue-500 underline cursor-pointer">
              Persyaratan Layanan
            </span>
          </p>
          <p className="text-xs text-gray-400 text-start">
            dan{" "}
            <span className="text-blue-500 underline cursor-pointer">
              Kebijakan Privasi
            </span>
            , termasuk{" "}
            <span className="text-blue-500 underline cursor-pointer">
              Penggunaan Kuki.
            </span>
          </p>
        </div>
        <div className="justify-center">
          <p className="text-white font-bold">Sudah punya akun ?</p>
        </div>
        <button
          className="btn bg-black group-hover:bg-slate-100 border border-gray-300 hover:border-gray-300 rounded-full flex justify-center items-center space-x-2 p-2 w-[300px]"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Masuk
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-zinc-950 group-hover:bg-slate-100 border border-zinc-950 flex justify-center items-center space-x-2 p-2 w-[800px]">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">
                ✕
              </button>
            </form>
            <Login />
          </div>
        </dialog>
      </div>
    </body>
  );
}

export default Direct;
