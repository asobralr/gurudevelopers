import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar } from 'swiper';
import 'swiper/css'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6'
import testimonial_data from '../data/testimonial-data'
import Image from 'next/image'

const testimonials = testimonial_data

const setting = {
  loop: true,
  slidesPerView: 1,
  // spaceBetween: 30,
  // breakpoints: {
  //    '1200': {
  //       slidesPerView: 4,
  //    },
  //    '992': {
  //       slidesPerView: 3,
  //    },
  //    '768': {
  //       slidesPerView: 3,
  //    },
  //    '576': {
  //       slidesPerView: 1,
  //    },
  //    '0': {
  //       slidesPerView: 1,
  //    },
  // },
  // scrollbar: {
  //    el: ".tp-scrollbar",
  //    clickable: true,
  // },
  navigation: {
    nextEl: '.next_arrow',
    prevEl: '.prev_arrow'
  }
}

export default function TestimonialArea () {
  return (
    <article className='container container_testimonials'>
      <div className='prev_arrow prev_arrow_desktop'><FaChevronLeft  /></div>
      <div className='container_swiper'>
        <Swiper {...setting} modules={[Navigation]}>
          {testimonials.map((el, index) => (
            <SwiperSlide key={el.name + '-' + index} className='testimonial'>
              <div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div className="image_testimonial">
                        <Image
                          src={el.author_img}
                          alt='theme-pure'
                          width={100}
                          height={100}
                        />
                    </div>
                </div>
                <p className="description">{el.description}</p>
                <div className="author">
                  <h3>{el.name}</h3>
                  <span>{el.title}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="arrows_testimonials_responsive">
            <div className='prev_arrow'><FaChevronLeft  /></div>
            <div className='next_arrow'><FaChevronRight  /></div>
        </div>
      </div>
      <div className='next_arrow next_arrow_desktop'><FaChevronRight  /></div>
    </article>
  )
}
