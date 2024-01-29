import BreadcrumbEight from "@/src/common/breadcrumbs/breadcrumb-8";
import { FooterGuru } from "@/src/layout/footers/footer-guru";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import ProjectArea from "../homes/home/project-area";
import ProjectDetailsArea from "./project-details-area";
import ThumbArea from "./thumb-area";

const ProjectDetails = ({ project }) => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbEight project={project} />
            <ThumbArea video={project?.video} imageBack={project.imageBack} />
            <ProjectDetailsArea project={project} />
            <ProjectArea />
          </main>
          <FooterGuru />
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
