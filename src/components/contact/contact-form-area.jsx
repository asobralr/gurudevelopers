import ContactUsForm from '@/src/forms/contact-us-form';
import SendIcon from '@/src/svg/send-icon';
import React from 'react';
import Lottie from "lottie-react";
import animationData from "../../../public/assets/lottie/contactGirl.json" ;
import send from '../../../public/assets/lottie/send.json' ;



const contact_content  = {
    sub_title: "CONTACT US",
    tilte: <>We'd love to <br /> hear from {" "} {" "}you. <span>  <Lottie
                              animationData={send}
                              loop={true}
                              style={{height:'10vh'}} 
                              /> </span></>,
    info: <>While we're good with smoke signals, there <br /> are easier ways to get in touch.</> ,
     
}
const {sub_title, tilte, info}  =  contact_content


const ContactFormArea = () => {
    return (
        <>
            <div className="contact-form-area pb-120">
               <div className="container">
                  <div className="row gx-0">
                     <div className="col-xl-5 col-lg-6">
                        <div className="contact-form-left">
                           <div className="contact-form-section-box pb-10">
                              <h5 className="inner-section-subtitle">{sub_title}</h5>
                              <h4 className="tp-section-title pb-10">{tilte}</h4>
                              <p>{info}</p>
                           </div>
                           <div className=" p-relative">
                             
                              
                                 <Lottie
                              animationData={animationData}
                              className="flex justify-center items-center"
                              style={{height:'30vh'}} 
                              loop={true}
                              />
                              
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-7 col-lg-6">
                        <div className="contact-form-right-warp">
                           <div className="postbox__comment-form">
                            <ContactUsForm /> 
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default ContactFormArea;