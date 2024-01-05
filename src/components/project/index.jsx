import BreadcrumbSeven from '@/src/common/breadcrumbs/breadcrumb-7'
import FooterFive from '@/src/layout/footers/footer-5'
import HeaderSix from '@/src/layout/headers/header-6'
import React from 'react'
import CtaArea from '../contact/cta-area'
import Portfolio from './portfolio'
import BreadcrumbTwo from '@/src/common/breadcrumbs/breadcrumb-2'
import TeamArea from '../team/team-area'

const Project = () => {
  //**VARIACION 1 HEADER */

  //   return (
  //     <>
  //       <HeaderSix style_2={true} />
  //       <main>
  //         <BreadcrumbSeven />
  //         <Portfolio />
  //         <CtaArea />
  //       </main>
  //       <FooterFive style_contact={true}  style_team={true} />
  //     </>
  //   );

  //**VARIACION 2 HEADER */

  return (
    <>
      <HeaderSix />
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <main>
            <BreadcrumbTwo title={'Our Projects'} innertitle={'Projects'} />
            <Portfolio />
            <CtaArea />
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  )
}

export default Project
