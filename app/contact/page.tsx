import React from 'react'
import dynamic from "next/dynamic";
const NavBar = dynamic(() => import("@/components/navbar"));
const ContactSection = dynamic(() => import("@/components/contact"));
const FooterSection = dynamic(() => import("@/components/footer"));



const page = () => {
  return (
    <div>
        <NavBar />
        <ContactSection />
        <FooterSection />
    </div>
  )
}

export default page