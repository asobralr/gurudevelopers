import FooterThree from "@/src/layout/footers/footer-3";
import HeaderThree from "@/src/layout/headers/header-3";
import React from "react";
// import TestimonialArea from "../home-3/testimonial-area";
import TestimonialArea from "../../../common/testimonial-area";
import BlogArea from "../home-3/blog-area";
import CardArea from "../../../common/card-area";
import CounterArea from "../home-3/counter-area";
import HeroArea from "../home-3/hero-area";
import IntegrationArea from "../home-3/integration-area";
import RatedArea from "../home-3/rated-area";
import SalesArea from "../../../common/sales-area";
import ServiceArea from "../home-3/service-area";
import FooterFive from "@/src/layout/footers/footer-5";
import { Projects } from "./Projects";
import RankArea from "../home/rank-area";
import HeaderGuru from "@/src/layout/headers/header-guru";

const HomeGuru = () => {
  return (
    <>
      <HeaderGuru /> {/* HEADER */}
      <HeroArea /> {/* HERO, IT INCLUDE BIG IMAGE */}
      {/* <CounterArea /> */}
      <ServiceArea /> {/* SERVICES */}
      {/* <RatedArea /> */}
      {/* <CardArea /> */}
      {/* <SalesArea /> */}
      <Projects />
      {/* <RankArea /> */}
      <TestimonialArea />
      {/* <IntegrationArea /> */}
      {/* <BlogArea /> */}
      {/* <FooterThree /> */}
      <FooterFive bg_style={false} style_contact={true} style_team={true}/>
    </>
  );
};

export default HomeGuru;
