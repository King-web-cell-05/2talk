/* eslint-disable react/no-unescaped-entities */
import dynamic from "next/dynamic";
import { Suspense } from "react";
const ConfirmBookingSection = dynamic(
  () => import("@/components/confirmbooking")
);

const page = () => {
  return (
    <div>
      <Suspense fallback={<div className="text-white p-10">Loading...</div>}>
        <ConfirmBookingSection />
      </Suspense>
    </div>
  );
};

export default page;
