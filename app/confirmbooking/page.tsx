/* eslint-disable react/no-unescaped-entities */
import dynamic from 'next/dynamic';
const ConfirmBookingSection = dynamic(() => import("@/components/confirmbooking"));

const page = () => {
  return (
    <div>
        <ConfirmBookingSection />
    </div>
  )
}

export default page