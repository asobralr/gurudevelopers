import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import HomeGuru from "../components/homes/guruHome";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <HomeGuru />
    </Wrapper>
  );
};

export default Home;
