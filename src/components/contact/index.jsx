import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import ContactFormArea from "./contact-form-area";
import ContactInner from "./contact-inner";
import CtaArea from "./cta-area";
import HeroBanner from "../../common/hero-banner";
import OfficeLocation from "./office-location";
import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";

const Contact = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* <Breadcrumb title_top="Get In" title_bottom="Get In" /> */}
            {/* <HeroBanner bg_img="/assets/img/contact/contact-banner.jpg" /> */}
            {/* <OfficeLocation /> */}
            <BreadcrumbTwo title={'Contact Us'} innertitle={'Contact'} />
            <div style={{marginTop:120}}><ContactFormArea /></div>
            <ContactInner />
            {/* <CtaArea /> */}
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default Contact;
