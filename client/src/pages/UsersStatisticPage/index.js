import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UsersStatistic from "../../components/UsersStatistic";
import ScrollOnTop from "../../components/common/ScrollOnTop/ScrollOnTop";
import BackToTop from "../../components/common/GoUpButton";


export default function UsersStatisticPage() {
  return (
    <>
      <ScrollOnTop />
      <BackToTop />
      <Header />
      <UsersStatistic />
      <Footer />
    </>
  );
}
