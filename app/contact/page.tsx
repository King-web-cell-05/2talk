import React from 'react'
import dynamic from "next/dynamic";
const ContactSection = dynamic(() => import("@/components/contact"));
const FooterSection = dynamic(() => import("@/components/footer"));



const page = () => {
  return (
    <div>
        <ContactSection />
        <FooterSection />
    </div>
  )
}

export default page