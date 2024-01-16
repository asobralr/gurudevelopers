import CheckboxIcon from '@/src/svg/checkbox-icon';
import EmailFive from '@/src/svg/email-5';
import LocationIconThree from '@/src/svg/location-icon-3';
import ShareIcon from '@/src/svg/share-icon';
import React from 'react';


import team_img from "../../../public/assets/img/team/team-details-1.jpg";
import Image from 'next/image';
import Link from 'next/link';



const TeamDetailsArea = ({member}) => {
    const {
        name, 
        feature_list, 
        expricence,  
        skill_title, 
        details_skill, 
        membur_about_title, 
        about_info_1, 
        about_info_2,
        address,
        facebook,
        instagram,
        linkedin,
        twitter,
        birthday,
        mail
    }  = member

    return (
        <>
            <div className="team-details-area pt-100 pb-100">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-xl-10">
                        <div className="team-details-wrapper">
                           <div className="row">
                              <div className="col-xl-4 col-lg-4 col-md-4">
                                 <div className="team-details-img-box text-center">
                                    <div className="team-details-img">
                                       <Image src={member.img || ''} alt="theme-pure" />
                                    </div>
                                    {/* <div className="team-details-work-tag">
                                       <span> 
                                          <CheckboxIcon />
                                       </span>
                                       <span>Looking for Work</span>
                                    </div> */}
                                   
                                    <div className="team-details-work-location" style={{marginTop:20}}>
                                       <span> 
                                          <LocationIconThree />
                                       </span>
                                       <span>{address || '--'}</span>
                                    </div>
                                    {birthday && <div className="team-details-work-location" style={{marginTop:10}}>
                                        {calculateAge(birthday)} Years
                                    </div>}
                                 </div>
                              </div>
                              <div className="col-xl-8 col-lg-8 col-md-8">
                                 <div className="team-details-info-box">
                                    <h3 className="team-details-client-title">{name}</h3>
                                    <div className="team-details-contact-box d-flex align-items-center">
                                       <div className="team-details-social-info">
                                          {facebook && <Link href={facebook} target="_blank"><i className="fab fa-facebook-f"></i></Link>}
                                          {twitter && <Link href={twitter} target="_blank"><i className="fab fa-twitter"></i></Link>}
                                          {linkedin && <Link href={linkedin} target="_blank"><i className="fab fa-linkedin-in"></i></Link>}
                                          {instagram && <Link href={instagram} target="_blank"><i className="fab fa-instagram"></i></Link>}
                                       </div>
                                       <div className="team-details-personal-info">
                                          {mail && <Link href={`mailto:${mail}`} target="_blank"> 
                                             <EmailFive />
                                             <span>Message</span>
                                          </Link>}
                                          {/* <Link href="#"> 
                                             <ShareIcon />
                                             <span>Share</span>
                                          </Link> */}
                                       </div>
                                    </div>
                                    <div className="team-details-expricence-box d-flex align-items-center">
                                       {expricence.map((item, i) => 
                                          <div key={i} className="team-details-expricence-box-1">
                                             <span>{item.title}</span> <br />
                                             <em>{item.info}</em>
                                          </div>
                                       )} 
                                    </div>
                                    <div className="team-details-skill">
                                       <h5>{skill_title}</h5>
                                       {details_skill.map((item, i)  => <span key={i}>{item}</span>)} 
                                    </div>
                                 </div>
                              </div>
                           </div> 
                        </div>
                     </div>
                  </div>
                  <div className="row justify-content-center">
                     <div className="col-xl-8 col-lg-10">
                        <div className="team-details-text-wrapper pt-80">
                           <div className="team-details-text">
                              <h4 className="team-details-title">{membur_about_title}</h4>
                              <p>{about_info_1}</p>
                           </div>
                           <div className="team-details-feature-list">
                              <ul>
                              {feature_list.map((item, i) => <li key={i}>{item}</li>)} 
                              </ul>
                              <p>{about_info_2}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
         </div>
        </>
    );
};

export default TeamDetailsArea;

const calculateAge = (birthday) => {
    const today = new Date();
    const newDate = new Date(birthday);
    const date = today - newDate;
    
    const years = new Date(date).getFullYear() - 1970;
    return years
}