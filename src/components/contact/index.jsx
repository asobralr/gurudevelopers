import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import ContactFormArea from "./contact-form-area";
import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import { FooterGuru } from "@/src/layout/footers/footer-guru";

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
           
            {/* <CtaArea /> */}
          </main>
          {/* <FooterFive style_contact={true} style_team={true} /> */}
          <FooterGuru />
        </div>
      </div>
    </>
  );
};

export default Contact;
