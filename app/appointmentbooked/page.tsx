/* eslint-disable react/no-unescaped-entities */
import dynamic from 'next/dynamic';
const AppointmentBookedSection = dynamic(() => import("@/components/appointmentbooked"));


const page = () => {
  return (
    <div>
        <AppointmentBookedSection />
    </div>
  )
}

export default page