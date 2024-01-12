'use client'
import portfolio_data from '@/src/data/portfolio-data'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

// data
const categories = [
  'All',
  ...new Set(portfolio_data.map(item => item.category))
]
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [items, setItems] = useState(portfolio_data)
  const searchParam = useSearchParams()
  const router = useRouter()

  const filterItems = cateItem => {
    setActiveCategory(cateItem)
    console.log({ cateItem })
    if (cateItem === 'All') {
      return setItems(portfolio_data)
    } else {
      const findItems = portfolio_data.filter(findItem => {
        return findItem.category == cateItem
      })
      setItems(findItems)
    }
  }

  useEffect(() => {
    const filter = searchParam.get('filter')
    if (
      filter &&
      categories.some(
        el => el != 'All' && el.toLowerCase() == filter.toLowerCase()
      )
    ) {
      filterItems(filter)
      const findItems = portfolio_data.filter(findItem => {
        return findItem.category.toLowerCase() == filter
      })
      setItems(findItems)
      setActiveCategory(filter)
    }
  }, [searchParam.get('filter')])

  return (
    <>
      <div className='portfolio-area pt-100 pb-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div
                className='portfolio-filter masonary-menu text-center mb-35'
                style={{ position: 'relative', zIndex: 1000 }}
              >
                {categories.map((cate, i) => (
                  <button
                    onClick={() => filterItems(cate)}
                    key={i}
                    className={`${
                      cate?.toLowerCase() === activeCategory?.toLowerCase()
                        ? 'active'
                        : ''
                    }`}
                  >
                    <span>{cate}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className='row grid'>
            {items.map((item, i) => (
              <div
                key={i}
                className='col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item  cat1 cat4 cat3 cat5'
                style={{ cursor: 'pointer' }}
                onClick={() => router.push(`/project/${item.slug}`)}
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
                  <div
                    className='inner-project-content'
                    style={{ paddingRight: 20 }}
                  >
                    <span className='inner-project-category-title'>
                      {item.job_title}
                    </span>
                    <h4 className='inner-project-title'>
                      <Link href='/project-details'>{item.title}</Link>
                    </h4>
                    <p>{item.des}</p>
                    {/* <div className='buttons_card_project'>
                      {item.slug && (
                        <Link href={`/project/${item.slug}`}>Details</Link>
                      )}
                      {item.link_site && (
                        <Link href={item.link_site || ''} target='_blank'>
                          Go Page
                        </Link>
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
