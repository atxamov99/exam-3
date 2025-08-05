import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer className="bg-[#171a21] text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white font-bold text-lg">VALVE</span>
            <span className="text-white text-lg">STEAM</span>
          </div>
          <p className="text-xs">
            © 2023 Valve Corporation. All rights reserved.<br />
            All trademarks are property of their respective<br />
            owners in the US and other countries.<br />
            VAT included in all prices where applicable.
          </p>
        </div>

        {/* Center Section */}
        <div className="flex flex-col gap-2">
          <a href="#" className="hover:text-white">About Valve</a>
          <a href="#" className="hover:text-white">Jobs</a>
          <a href="#" className="hover:text-white">Steamworks</a>
          <a href="#" className="hover:text-white">Steam Distribution</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-2">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Legal</a>
          <a href="#" className="hover:text-white">Steam Subscriber Agreement</a>
          <a href="#" className="hover:text-white">Refunds</a>
          <a href="#" className="hover:text-white">Cookies</a>
          <div className="flex gap-3 mt-4">
            <button className="p-2 bg-[#20232a] hover:bg-[#2c2f36] rounded">
              <FaFacebookF className="text-white" />
            </button>
            <button className="p-2 bg-[#20232a] hover:bg-[#2c2f36] rounded">
              <IoClose className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
