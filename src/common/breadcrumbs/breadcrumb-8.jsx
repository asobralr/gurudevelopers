import React from "react";
import useBreadcrumbTitleAnime from "@/src/hooks/useBreadcrumbTitleAnime";
import Link from "next/link";
import Image from "next/image";

import shape_1 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-2.png";

// breadcrumb our_service data
const our_service = [
  {
    id: 1,
    cls: "space-left-1",
    title: "CLIENT",
    description: (
      <>
        Microsoft App Holing Ltd, <br /> Australia Area
      </>
    ),
  },
  {
    id: 2,
    cls: "space-left-2",
    title: "Stack",
    description: (
      <>
        React, Next, <br /> Node, Express
      </>
    ),
  },
  {
    id: 3,
    cls: "space-left-3",
    title: "Project Date",
    description: (
      <>
        October 23th, 2022 <br /> Release Started
      </>
    ),
  },
];

const BreadcrumbEight = ({ project }) => {
  const { animeRef } = useBreadcrumbTitleAnime();
  console.log({ project });
  return (
    <>
      <div className="breadcrumb__area breadcrumb-height-3 p-relative blue-bg-2 fix">
        <div className="breadcrumb__shape-1">
          <Image src={shape_1} alt="theme-pure" />
        </div>
        <div className="breadcrumb__shape-2">
          <Image src={shape_2} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="breadcrumb__content-wrap">
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="breadcrumb__content z-index-3 mb-60">
                  <div className="breadcrumb__text wow tpfadeIn" data-wow-duration=".9s" data-wow-delay=".6s">
                    <span>{project.header}</span>
                  </div>
                  <h3 ref={animeRef} className="breadcrumb__title anime_text">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
            <div className="row g-0 z-index-3">
              <div className="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                <div className={`breadcrumb__client-info space-left-1`}>
                  <span>Client</span>
                  <p>{project.client}</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                <div className={`breadcrumb__client-info space-left-2`}>
                  <span>Stack</span>
                  <ul style={{ color: "white" }}>{project.services}</ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                <div className={`breadcrumb__client-info space-left-3`}>
                  <span>Status</span>
                  <p>{project.status}</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                <div className="breadcrumb__client-info space-left-4">
                  <span>Demo</span>
                  {project.link_site && (
                    <div className="breadcrumb__live-btn">
                      <Link className="tp-btn-inner-border" href={project.link_site || ""} target="_blank">
                        See live
                        <i className="fal fa-arrow-up"></i>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbEight;
