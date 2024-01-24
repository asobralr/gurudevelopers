import React from "react";
import SEO from "../common/seo";
import HomeThree from "../components/homes/guruHome";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Gurudevelopers"} />
      <HomeThree />
    </Wrapper>
  );
};

export default index;
