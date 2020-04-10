import React from "react";
import HeaderMain from "../../components/HeaderMain";
import FooterMain from "../../components/FooterMain";
import PromotionSection from "../../components/PromotionSection";
import ColoborationSection from "../../components/ColaborationSection";
import PricingSection from "../../components/PricingSection";
import ScrollOnTop from "../../components/common/ScrollOnTop/ScrollOnTop";
import BackToTop from "../../components/common/GoUpButton";


export default function HomePage() {
  return (
    <>
      <ScrollOnTop />
      <BackToTop />
      <HeaderMain />
      <PromotionSection />
      <ColoborationSection />
      <PricingSection />
      <FooterMain />
    </>
  );
}
