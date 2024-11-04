function Contact() {
  return (
    <div className="bg-[#0b1e5e] w-screen h-screen relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#d414e4"
          fillOpacity="1"
          d="M0,64L40,58.7C80,53,160,43,240,37.3C320,32,400,32,480,32C560,32,640,32,720,26.7C800,21,880,11,960,53.3C1040,96,1120,192,1200,208C1280,224,1360,160,1400,128L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <div className="text-center">
        <h1 className="text-yellow-200 text-4xl font-bold" id="connect">CONNECT WITH ME</h1>
      </div>
      <div className="flex mx-auto mt-20 justify-center items-center text-center gap-20">
        <a href="https://open.spotify.com/user/31tf4qxd4zr4f4vjjfxnjkv327h4?si=685a32e523564fa2" target="_blank">
          <i className="text-yellow-200 ri-spotify-fill lg:text-6xl sm:text-6xl text-6xl hover:bg-blue-900 rounded-full"></i>
        </a>
        <a href="https://github.com/kemalmusthafa" target="_blank">
          <i className="text-yellow-200 ri-github-fill lg:text-6xl sm:text-6xl text-6xl hover:bg-blue-900 rounded-full"></i>
        </a>
        <a href="https://www.instagram.com/kemalmusthafa" target="_blank">
          <i className="text-yellow-200 ri-instagram-line lg:text-6xl sm:text-6xl text-6xl hover:bg-blue-900 rounded-full"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/kemal-musthafa-3782a8301/"
          target="_blank"
        >
          <i className="text-yellow-200 ri-linkedin-box-fill lg:text-6xl sm:text-6xl text-6xl hover:bg-blue-900 rounded-full"></i>
        </a>
        <a
          href="https://steamcommunity.com/profiles/76561198362404804"
          target="_blank"
        >
          <i className="text-yellow-200 ri-steam-fill lg:text-6xl sm:text-6xl text-6xl hover:bg-blue-900 rounded-full"></i>
        </a>
      </div>
    </div>
  );
}
export default Contact;
