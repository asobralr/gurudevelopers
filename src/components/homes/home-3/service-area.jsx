import service_data from '@/src/data/service-data'
import Link from 'next/link'
import React from 'react'

import service_img_1 from '../../../../public/assets/img/service/sv-icon-3-1.png'
import service_img_2 from '../../../../public/assets/img/service/service-shape-3-1.png'
import Image from 'next/image'

const service_content = {
  title: (
    <>
      We provide customized services to
      <br />
      <span>Meet Your Needs.</span>
    </>
  ),
  btn_text: <>See All Services</>,

  bg_img: '/assets/img/service/service-3-bg.png',
  service_title: 'Mobile App Development',
  service_info: (
    <>
      We follow best mobile practices and latest technologies like React Native
      to make sure that your customers can quickly connect to your app and
      website from any device.{' '}
    </>
  )
}
const { title, btn_text, bg_img, service_title, service_info } = service_content

const ServiceArea = () => {
  return (
    <>
      <div className='tp-service-area pb-90 pt-70 z-index container_total_serviceArea'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end'>
                <h3
                  className='tp-section-title-3 wow tpfadeLeft'
                  data-wow-duration='.9s'
                  data-wow-delay='.3s'
                >
                  {title}
                </h3>
                {/* <Link className="tp-btn-blue-lg tp-btn-hover mb-10 alt-color-black wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s" href="/service-details">
                  <span>{btn_text}</span>
                  <b></b>
                </Link> */}
              </div>
            </div>
          </div>

          <div className='row container_global_services'>
            <div
              className='col-xl-8 wow tpfadeLeft'
              data-wow-duration='.9s'
              data-wow-delay='.5s'
            >
              <div
                className='tp-service-3-item mb-30 p-relative z-index first_service_card'
                style={{ backgroundImage: `url(${bg_img})` }}
              >
                <div className='tp-service-3-icon'>
                  <Image src={service_img_1} alt='theme-pure' />
                </div>
                <div className='tp-service-3-content'>
                  <span>{service_title}</span>
                  <h4 className='tp-service-3-title-sm'>{service_info}</h4>
                </div>
                {/* <div className="tp-service-3-btn">
                  <Link className="tp-btn-white-solid" href="/service-details">
                    Learn More
                  </Link>
                </div> */}
                <div className='tp-service-3-shape'>
                  <Image src={service_img_2} alt='theme-pure' />
                </div>
              </div>
            </div>

            {service_data.slice(5, 6).map((item, i) => (
              <div
                key={i}
                className='col-xl-4 col-lg-6 col-md-6 wow tpfadeUp container_second_tab_service'
                data-wow-duration='.9s'
                data-wow-delay='.5s'
              >
                <div className='tp-service-sm-item mb-30 d-flex flex-column justify-content-between'>
                  <div className='tp-service-sm-icon'>{item.icon}</div>
                  <span>{item.title}</span>
                  <h3 className='tp-service-sm-title'>{item.description}</h3>
                  {/* <div className="tp-service-sm-link">
                      <Link href="/service-details">
                        Learn More <i className="far fa-arrow-right"></i>
                      </Link>
                    </div> */}
                </div>
              </div>
            ))}
          </div>
          <div className='container_services_tabs'>
              {service_data.slice(6, 9).map((item, i) => (
                  <div
                    key={i}
                    data-wow-duration='.9s'
                    data-wow-delay='.5s'
                    className="wow tpfadeUp tp-service-sm-item"
                  >
                    <div className='tp-service-sm-icon'>{item.icon}</div>
                    <span>{item.title}</span>
                    <h3 className='tp-service-sm-title'>{item.description}</h3>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceArea
