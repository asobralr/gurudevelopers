import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import HomeOne from "../components/homes/home";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Gurudevelopers"} />
      <HomeOne />
    </Wrapper>
  );
};

export default index;
