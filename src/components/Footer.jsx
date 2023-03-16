import React from "react"

import { logo } from "../assets"

const Footer = () => {
  return (
    <div className="bg-black-200 sm:px-16 px-6 sm:py-12 py-10 min-h-[150px] flex flex-row justify-between">
      <img src={logo} alt="logo" className="w-12 flex m-auto" />

      <p className="text-secondary text-[17px] leading-[30px] text-center select-none m-auto">
        {new Date().getFullYear()} &copy; EH. All rights reserved.
      </p>
    </div>
  )
}

export default Footer