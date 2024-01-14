import React from "react";
import SEO from "@/src/common/seo";
import Wrapper from "@/src/layout/wrapper";
import Team from "@/src/components/team";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"GuruDevelopers - Team"} />
      <Team />
    </Wrapper>
  );
};

export default index;
