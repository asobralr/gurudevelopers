import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useTitleAnimation from "@/src/hooks/useTitleAnimation";
import useBreadcrumbTitleAnime from "@/src/hooks/useBreadcrumbTitleAnime";

import shape_1  from "../../../public/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2  from "../../../public/assets/img/breadcrumb/breadcrumb-shape-2.png";
import shape_3  from "../../../public/assets/img/breadcrumb/breadcrumb-3.png";
import shape_4  from "../../../public/assets/img/breadcrumb/breadcrumb-sub-1.png";

import team from '../../../public/assets/lottie/team.json';
import contact from '../../../public/assets/lottie/contact.json';
import project from '../../../public/assets/lottie/project.json';
import teamDetail from '../../../public/assets/lottie/teamdetail.json';
import Lottie from "lottie-react";


const BreadcrumbTwo = ({ title, innertitle, team_details, career_details, nameMember }) => {
  const { animeRef } = useBreadcrumbTitleAnime();
  let subtitleRef = useRef(null)
const lottieRef = 
  title == 'Team Members' ? team : 
  title == 'Contact Us' ? contact :
  title == 'Our Projects' ? project : teamDetail;


 useTitleAnimation(subtitleRef);
  return (
    <>
      <div className="breadcrumb__area breadcrumb-height p-relative" style={{background: 'linear-gradient(to right,#962DAA, #221DC5)'}}>
        <div className="breadcrumb__shape-1">
          <Image src={shape_1} alt="theme-pure" />
        </div>
        <div className="breadcrumb__shape-2">
          <Image src={shape_2} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="breadcrumb__content">
                <h3
                  ref={animeRef}
                  className="breadcrumb__title tp-char-animation anime_text"
                >
                  {title}
                </h3>
                <div ref={subtitleRef} className="breadcrumb__list tp-title-anim tp__title_anime">
                  <span className="child-one">
                    <Link href="/">Home</Link>
                  </span>
                  <span className="dvdr">
                    <i className="fal fa-angle-right"></i>
                  </span>
                  <span
                    className={`${team_details && "child-one"} ${
                      career_details && "child-one"
                    }`}
                  >
                    <Link href={`/${innertitle?.toLowerCase()}`}>{innertitle}</Link>
                  </span>
                  {team_details && (
                    <>
                      <span className="dvdr">
                        <i className="fal fa-angle-right"></i>
                      </span>
                      <span>{nameMember}</span>
                    </>
                  )}
                  {career_details && (
                    <>
                      <span className="dvdr">
                        <i className="fal fa-angle-right"></i>
                      </span>
                      <span>Team Member</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-lg-4 text-center text-md-end">
              <div className="breadcrumb__img p-relative text-start z-index">
                <Lottie animationData={lottieRef} className="flex justify-center items-center" loop={true} />  
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbTwo;
