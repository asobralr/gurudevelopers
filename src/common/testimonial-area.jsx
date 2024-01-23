import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar } from 'swiper'
import 'swiper/css'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6'
import testimonial_data from '../data/testimonial-data'
import Image from 'next/image'

const testimonials = testimonial_data

const setting = {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.next_arrow',
    prevEl: '.prev_arrow'
  }
}

export default function TestimonialArea ({ background = false }) {
  return (
    <section
      style={{
        background: background ? 'linear-gradient(to top, #001F3F, #03357a)' : '',
        // backgroundColor: background ? '#03357a' : '',
        padding: background ? '30px 0 1px 0' : '',
        marginBottom: background ? 100 : 0
      }}
    >
      <article className='container container_testimonials'>
        <div
          className='prev_arrow prev_arrow_desktop'
          style={{ border: background ? '2px solid #FFFFFF' : '' }}
        >
          <FaChevronLeft style={{ color: background ? '#FFFFFF' : '' }} />
        </div>
        <div className='container_swiper'>
          <Swiper {...setting} modules={[Navigation]}>
            {testimonials.map((el, index) => (
              <SwiperSlide key={el.name + '-' + index} className='testimonial'>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='image_testimonial'>
                      <Image
                        src={el.author_img}
                        alt='theme-pure'
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <p className='description' style={{color: background ? '#F0F0F0' : ''}}>{el.description}</p>
                  <div className='author'>
                    <h3 style={{color: background ? '#FFFFFF' : ''}}>{el.name}</h3>
                    <span style={{color: background ? '#F0F0F0' : ''}}>{el.title}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='arrows_testimonials_responsive'>
            <div
              className='prev_arrow'
              style={{ border: background ? '2px solid #FFFFFF' : '' }}
            >
              <FaChevronLeft style={{ color: background ? '#FFFFFF' : '' }} />
            </div>
            <div
              className='next_arrow'
              style={{ border: background ? '2px solid #FFFFFF' : '' }}
            >
              <FaChevronRight style={{ color: background ? '#FFFFFF' : '' }} />
            </div>
          </div>
        </div>
        <div
          className='next_arrow next_arrow_desktop'
          style={{ border: background ? '2px solid #FFFFFF' : '' }}
        >
          <FaChevronRight style={{ color: background ? '#FFFFFF' : '' }} />
        </div>
      </article>
    </section>
  )
}
