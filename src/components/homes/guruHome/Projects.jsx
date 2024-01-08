'use client'
import portfolio_data from '@/src/data/portfolio-data'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

// data
const categories = [
  'All',
  ...new Set(portfolio_data.map(item => item.category))
]

export const Projects = () => {
  const [items, setItems] = useState(portfolio_data?.filter(el => el.priorityHome))

  return (
    <>
      <div className='portfolio-area pt-50 pb-90'>
        <div className='container'>
          <h3
            className='tp-section-title-3 wow tpfadeLeft'
            style={{ marginBottom: 50 }}
            data-wow-duration='.9s'
            data-wow-delay='.3s'
          >
            Our Projects
          </h3>
          <div className='row grid'>
            {items?.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className='col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item  cat1 cat4 cat3 cat5'
              >
                <div className='inner-project-item mb-30'>
                  <div
                    className='inner-project-img fix p-relative'
                    style={{ height: 320 }}
                  >
                    <Image
                      className='w-100'
                      src={item.thumb_img}
                      alt='theme-pure'
                      style={{ height: '100%', objectFit: 'cover' }}
                    />
                    {item.brand_logo_view && (
                      <div className='inner-project-brand'>
                        <Image src={item.brand_logo} alt='theme-pure' />
                      </div>
                    )}
                  </div>
                  <div className='inner-project-content'>
                    <span className='inner-project-category-title'>
                      {item.job_title}
                    </span>
                    <h4 className='inner-project-title'>
                      <Link href='/project-details'>{item.title}</Link>
                    </h4>
                    <p>{item.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='homeProjects_viewMore'>
            <Link
              href='/project'
              className='tp-btn-blue-lg tp-btn-hover mb-10 alt-color-black wow tpfadeRight'
              data-wow-duration='.9s'
              data-wow-delay='.5s'
            >
              <span>View More</span>
              <b></b>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
