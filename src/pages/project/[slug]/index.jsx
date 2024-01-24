import React from "react";
import SEO from "../../../common/seo";
import ProjectDetails from "../../../components/project-details";
import Wrapper from "../../../layout/wrapper";
import project_data from "@/src/data/project-data";

const index = (slug) => {
  const project_details = project_data.filter((item) => item.slug === slug.slug);

  const project = project_details?.length > 0 ? project_details[0] : null;

  return (
    <Wrapper>
      <SEO pageTitle={"Gurudevelopers"} />
      <ProjectDetails project={project} />
    </Wrapper>
  );
};

export default index;

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;

  return {
    props: {
      slug,
    },
  };
};
