import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import useTitleAnimation from "@/src/hooks/useTitleAnimation";
import Brwoser from "@/src/common/brwoser";
import BounceLine from "@/src/svg/bounce-line";

import left_shape from "../../../../public/assets/img/hero/hero-left-shape-3-1.png";
import gradient_bg from "../../../../public/assets/img/hero/hero-gradient-3.jpg";
import img_1 from "../../../../public/assets/img/hero/hero-img-3-1.png";
import img_2 from "../../../../public/assets/img/hero/hero-img-3-1-3.png";
import { useIsomorphicLayoutEffect } from "@/src/hooks/useIsomorphicEffect";
import Lottie from "lottie-react";
import animationData from "../../../../public/assets/lottie/app2.json";

const hero_content = {
  title_1: (
    <>
      Apps for a better <span style={{ marginRight: 20 }}>World</span>
    </>
  ),
  title_2: "",
  info: <>We're a friendly group of developers who build impactful websites and apps</>,
  btn_1: "Live Damo",
  btn_2: "Try it on Browser",
};
const { title_1, title_2, info, btn_1, btn_2 } = hero_content;

const HeroArea = () => {
  let info_anim = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let tl = gsap.timeline({ default: { ease: "SlowMo.easeOut" } });
    tl.to(".hero-text-anim i.child-1", { y: "0px", duration: 1, opacity: 1, stagger: 0.3, delay: 0.5 });
  }, []);

  return (
    <>
      <div className="tp-hero-area tp-hero-pt pt-170 pb-70 p-relative">
        <div className="tp-hero-left-shape">
          <Image src={left_shape} alt="them-pure" />
        </div>
        <div className="tp-hero-gradient-bg">
          <Image src={gradient_bg} alt="them-pure" />
        </div>
        <div className="container">
          <div className="row justify-content-center z-index-3">
            <div className="col-xl-11">
              <div className="tp-hero-title-box text-center">
                <h2 className="tp-hero-title-3 hero-text-anim pb-5">
                  <i>
                    <i className="child-1">{title_1}</i>
                  </i>
                  <i>
                    <i className="child-1">{title_2}</i>
                  </i>
                </h2>
                <p className="tp-char-animation-2 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                  {info}
                </p>
              </div>
              <div className="tp-hero-btn-3 text-center wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".9s"></div>
              <div className="tp-hero-browser-wrapper d-flex align-items-center justify-content-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s"></div>
              <div className="tp-hero-3-wrapper p-relative">
                <div className="tp-hero-3-border-wrap d-none d-md-block">
                  {/* comentar styles para volver al inicial */}
                  <span className="redius-shape-1" style={{ maxHeight: 300, maxWidth: 300, top: 0, left: 150 }}></span>
                  <span className="redius-shape-2" style={{ maxHeight: 300, maxWidth: 300, top: 200 }}></span>
                  <span className="redius-shape-3" style={{ maxHeight: 300, maxWidth: 300, top: 0, right: 190 }}></span>
                </div>
                <div className="tp-hero-3-main-thumb z-index-5"></div>

                <div className="tp-hero-3-main-thumb z-index-5 lottie_home_hero">
                  {/* comentar styles para volver al tamaño inicial */}
                  <Lottie animationData={animationData} className="flex justify-center items-center" style={{ height: "50vh", margin: "0 auto" }} loop={true} />
                </div>
                <div className="tp-hero-3-shape-5 d-none d-lg-block wow frist-img animated">
                  <Image src={img_2} alt="them-pure" />
                </div>
                <div className="tp-hero-3-shape-6 d-none d-lg-block">
                  <span>
                    {" "}
                    <BounceLine />{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;
