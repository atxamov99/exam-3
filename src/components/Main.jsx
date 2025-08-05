import React from "react";
import Steam_banner from '../assets/staem_banner.gif';

const Main = () => (
  <div>

    <div className="w-full h-[320px] bg-cover bg-center bg-black"
    style={{
      backgroundImage: `url(${Steam_banner})`,
    }}></div>

    <main className="bg-gradient-to-b from-[#0f0c1b] via-[#232b3a] to-[#232b3a] w-full h-[100]">
      
    </main>
  </div>
);

export default Main;