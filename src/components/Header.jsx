import React from "react";

const Header = () => (
  <nav className="bg-[#171a21] text-white w-full">
    {/* Top bar */}
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center space-x-6">
        <img src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="Steam" className="h-6" />
        <span className="font-bold cursor-pointer hover:text-blue-400 transition-all">STORE</span>
        <span className="font-bold cursor-pointer hover:text-blue-400 transition-all">COMMUNITY</span>
        <span className="font-bold cursor-pointer hover:text-blue-400 transition-all">JUXTOPPOSED</span>
        <span className="font-bold cursor-pointer hover:text-blue-400 transition-all">LIBRARY</span>
        <span className="font-bold cursor-pointer hover:text-blue-400 transition-all">DOWNLOADS</span>
      </div>
      <div className="flex items-center space-x-3">
        <button className="bg-[#22262b] rounded px-2 py-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" /></svg>
        </button>
        <button className="bg-[#22262b] rounded px-2 py-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        </button>
        <img src="https://avatars.cloudflare.steamstatic.com/1a2b3c4d5e6f7g8h9i0j_full.jpg" alt="Avatar" className="h-8 w-8 rounded-full" />
        <span>Juxtaposed <span className="text-green-400">$5.25</span></span>
      </div>
    </div>
    {/* Bottom bar */}
    <div className="bg-[#212B45] flex items-center px-4 py-1 space-x-2">
      <button className="hover:bg-[#39415a] text-white px-3 py-1 rounded">Home</button>
      <button className="hover:bg-[#39415a] px-3 py-1 rounded">Browse</button>
      <button className="hover:bg-[#39415a] px-3 py-1 rounded">Discover</button>
      <button className="hover:bg-[#39415a] px-3 py-1 rounded">Points Shop</button>
      <button className="hover:bg-[#39415a] px-3 py-1 rounded">Curators</button>
      <button className="hover:bg-[#39415a] px-3 py-1 rounded">Gift Cards</button>
      <button className="hover:bg-[#39415a] px-3 py-1 rounded">News</button>
      <input
        type="text"
        placeholder="Search..."
        className="ml-4 px-2 py-1 rounded bg-[#1b2838] text-white border border-[#39415a] focus:outline-none"
      />
      <span className="ml-auto flex items-center space-x-4">
        <span className="hover:underline cursor-pointer">Wishlist</span>
        <span className="hover:underline cursor-pointer">Cart</span>
        <button className="ml-2">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
        </button>
      </span>
    </div>
  </nav>
);

export default Header;