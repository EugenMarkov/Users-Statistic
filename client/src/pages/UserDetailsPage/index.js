import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UserDetails from "../../components/UserDetails";
import ScrollOnTop from "../../components/common/ScrollOnTop/ScrollOnTop";
import BackToTop from "../../components/common/GoUpButton";


export default function UserDetailsPage() {
  return (
    <>
      <ScrollOnTop />
      <BackToTop />
      <Header />
      <UserDetails />
      <Footer />
    </>
  );
}
