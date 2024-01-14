'use client'
import portfolio_data from '@/src/data/portfolio-data'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FaChevronDown } from "react-icons/fa";

// data
const categories = [
  'All',
  ...new Set(portfolio_data.map(item => item.category))
]

const stack = [
  { name: 'Mongo DB', filter: 'mongo' },
  { name: 'SQL', filter: 'sql' },
  { name: 'React Js', filter: 'react' },
  { name: 'Next Js', filter: 'next' },
  { name: 'Blockchain', filter: 'blockchain' },
  { name: 'Solidity', filter: 'solidity' },
  { name: 'Firebase', filter: 'Firebase' },
  { name: 'Node Js', filter: 'node' }
]

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [items, setItems] = useState(portfolio_data)
  const searchParam = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [selectFilter, setSelectFilter] = useState('')
  const [viewFilters, setViewFilters] = useState(false)

  const filterItems = cateItem => {
    setActiveCategory(cateItem)
  }

  useEffect(() => {
    let filter = portfolio_data;
    console.log({41: filter})
    if(activeCategory !== 'All'){
        filter = filter.filter(findItem => {
            return findItem.category.toLowerCase() == activeCategory.toLowerCase()
        })
    }

    if(selectFilter){
      filter = filter.filter(findItem =>
        findItem.stack?.some(el => selectFilter.filter?.toLowerCase() == el.toLowerCase())
      )
    }

    setItems(filter)
  },[activeCategory,selectFilter])

  const filterSelect = techology => {
    if (!techology) {
      setSelectFilter('')
    } else {
      setSelectFilter(techology)
    }
    setViewFilters(false)
  }

  useEffect(() => {
    const filter = searchParam.get('filter')

    console.log({filter})
    if (
      filter &&
      categories.some(
        el => el != 'All' && el.toLowerCase() == filter.toLowerCase()
      )
    ) {
        console.log('filter')
      setActiveCategory(filter)
    }
  }, [searchParam.get('filter'), pathname])

  return (
    <>
      <div className='portfolio-area pt-100 pb-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div
                className='portfolio-filter masonary-menu text-center mb-15'
                style={{ position: 'relative', zIndex: 10 }}
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
              <div className='select_portfolio'>
                <div onClick={() => setViewFilters(!viewFilters)}>
                  <h3>{selectFilter?.name || 'Select Stack'}</h3>
                  <FaChevronDown style={{transform: !viewFilters ? 'rotate(0)' : 'rotate(180deg)', transition: 'all 0.4s ease'}}/>
                </div>
                {viewFilters && <ul>
                  {selectFilter && (
                    <li onClick={() => filterSelect('')} className="button_clear_filter_project">Clear</li>
                  )}
                  {stack.map((item, i) => (
                    <li key={item.filter} onClick={() => filterSelect(item)} className={selectFilter.filter == item.filter ? 'active_filter_project' : ''}>
                      {item.name}
                    </li>
                  ))}
                </ul>}
              </div>
            </div>
          </div>
          <div className='row grid'>
            {items.length > 0 ? items.map((item, i) => (
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
            )) : (
                <p style={{textAlign:'center', marginTop:20, fontSize:28}}>Not results...</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
