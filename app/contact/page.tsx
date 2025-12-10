import React from 'react'
const ContactSection = dynamic(() => import("@/components/contact"));
import dynamic from "next/dynamic";


const page = () => {
  return (
    <div>
        <ContactSection />
    </div>
  )
}

export default page