/* eslint-disable react/no-unescaped-entities */
import dynamic from "next/dynamic";
const NavBar = dynamic(() => import("@/components/navbar"));
const BookNowPage = dynamic(() => import("@/components/Servicehub"));
const FooterSection = dynamic(() => import("@/components/footer"));

const page = () => {
  return (
    <>
      <NavBar />
      <BookNowPage />
      <FooterSection />
    </>
  );
};

export default page;
