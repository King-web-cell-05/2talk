/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/hero"));
const NavBar = dynamic(() => import("@/components/navbar"));



const page = () => {
  return (
    <div>
      <HeroSection/>
      <NavBar/>
    </div>
  )
}

export default page