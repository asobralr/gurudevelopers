import BreadcrumbEight from "@/src/common/breadcrumbs/breadcrumb-8";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import ProjectArea from "../homes/home/project-area";
import ProjectDetailsArea from "./project-details-area";
import ThumbArea from "./thumb-area";

const ProjectDetails = ({project}) => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbEight project={project}/>
            <ThumbArea video={project.video} image={project.main_image}/>
            <ProjectDetailsArea />
            <ProjectArea />
          </main>
          <FooterFive style_contact={true}  style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
