// thumb img import here
import thumb_img_0 from '../../public/assets/img/project/paradise.png'
import thumb_img_1a from '../../public/assets/img/project/myhotels.png'
import thumb_img_1 from '../../public/assets/img/project/Cinko.png'
import thumb_img_2a from '../../public/assets/img/project/ABCo.png'
import pai from '../../public/assets/img/project/pai.png'
import tlex from '../../public/assets/img/project/tlex.png'

import thumb_img_2 from '../../public/assets/img/project/brainbo.png'

import thumb_img_3 from '../../public/assets/img/project/gc_site.jpg'
import thumb_img_4 from '../../public/assets/img/project/Teachers.png'
import thumb_img_5 from '../../public/assets/img/project/pithia.png'
import thumb_img_6 from '../../public/assets/img/project/metaverse.jpeg'
import thumb_img_7 from '../../public/assets/img/project/bioefia.png'
import thumb_img_8 from '../../public/assets/img/project/eter.png'
import thumb_img_9 from '../../public/assets/img/project/MoeviusImg.png'
import thumb_img_10 from '../../public/assets/img/project/alic.png'
import thumb_img_11 from '../../public/assets/img/project/Cinko.png'
// brand logo import here
import brand_logo_0 from '../../public/assets/img/project/paradise.png'
import brand_logo_1 from '../../public/assets/img/project/project-inner-brand-1.png'
import brand_logo_2 from '../../public/assets/img/project/project-inner-brand-2.png'
import brand_logo_3 from '../../public/assets/img/project/project-inner-brand-3.png'
import brand_logo_4 from '../../public/assets/img/project/project-inner-brand-5.png'
import brand_logo_5 from '../../public/assets/img/project/project-inner-brand-4.png'
import brand_logo_6 from '../../public/assets/img/project/project-inner-brand-6.png'
import brand_logo_7 from '../../public/assets/img/project/project-inner-brand-5.png'
import brand_logo_8 from '../../public/assets/img/project/project-inner-brand-4.png'
import brand_logo_9 from '../../public/assets/img/project/project-inner-brand-6.png'
import brand_logo_10 from '../../public/assets/img/project/project-inner-brand-6.png'

const portfolio_data = [
  {
    id: 0,
    thumb_img: thumb_img_0,
    brand_logo: brand_logo_0,
    job_title: 'Frontend and Backend',
    title: <>Paradise</>,
    des: <>Nextjs with Sanity.</>,
    delay: '.5s',
    category: 'Web',
    filter_id: ['all', 'Web', 'Nextjs', 'Sanity'],
    brand_logo_view: false,
    priorityHome: true,
    link_site: 'https://paradiseresort.com.au/',
    slug: 'paradise'
  },
  {
    id: 1,
    thumb_img: thumb_img_1,
    brand_logo: brand_logo_0,
    job_title: 'Frontend and Backend',
    title: <>CiNKO</>,
    des: <>React Native Wallet.</>,
    delay: '.5s',
    category: 'Apps',
    filter_id: ['all', 'Web', 'Nextjs', 'Sanity'],
    brand_logo_view: false,
    priorityHome: true,
    link_site: 'https://paradiseresort.com.au/',
    slug: 'paradise'
  },
  {
    id: 2,
    thumb_img: thumb_img_1a,
    brand_logo: brand_logo_0,
    job_title: 'Frontend and Backend',
    title: <>myHotels</>,
    des: <>Nextjs with Strapi.</>,
    delay: '.5s',
    category: 'Web',
    filter_id: ['all', 'Web', 'Nextjs', 'Sanity'],
    brand_logo_view: false,
    priorityHome: false,
    link_site: 'https://strapi-hotel-com.vercel.app',
    slug: 'myhotels'
  },
  {
    id: 3,
    thumb_img: thumb_img_2a,
    brand_logo: brand_logo_1,
    job_title: 'Development Shopify, Backend and Frontend',
    title: <>ABCo</>,
    des: <>MERN Application connected with Shopify.</>,
    delay: '.5s',
    category: 'Web',
    filter_id: ['all', 'Shopify', 'Mongo', 'Development'],
    stack: ['Shopify', 'Mongo', 'Development'],
    brand_logo_view: false,
    priorityHome: false,
    link_site: 'https://abco.pairadido.com/',
    slug: 'abco'
  },
  {
    id: 5,
    thumb_img: tlex,
    brand_logo: brand_logo_1,
    job_title: 'App React Native',
    title: <>Tlex Flow</>,
    des: <>React Native App.</>,
    delay: '.5s',
    category: 'Apps',
    stack: ['Sql', 'Node'],
    brand_logo_view: false,
    priorityHome: true
  },
  {
    id: 6,
    thumb_img: thumb_img_2,
    brand_logo: brand_logo_2,
    job_title: 'Mobile App Design',
    title: <>Brainbo</>,
    des: <>Chromotherapy and meditation app.</>,
    delay: '.5s',
    category: 'Apps',
    stack: ['Sql', 'Node'],
    filter_id: [
      'all',
      'Design Work',
      'Branding',
      'Development',
      'Illusutration',
      'App Design'
    ],
    brand_logo_view: false
  },
  {
    id: 7,
    thumb_img: thumb_img_3,
    brand_logo: brand_logo_3,
    job_title: 'Development, App Design',
    title: <>Grupo Casa</>,
    des: <>Web3 App Real Estate and Blockchain.</>,
    delay: '.5s',
    category: 'Apps',
    filter_id: ['all', 'Web3'],
    brand_logo_view: false
  },
  {
    id: 8,
    thumb_img: thumb_img_4,
    brand_logo: brand_logo_4,
    job_title: 'Development, App Design',
    title: <>AOL SKY</>,
    des: (
      <>
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
      </>
    ),
    delay: '.5s',
    category: 'Apps',
    filter_id: [
      'all',
      'Design Work',
      'Branding',
      'Development',
      'Illusutration',
      'App Design'
    ],
    brand_logo_view: false,
    link_site: 'www.google.com',
    slug: 'aol-sky'
  },
  {
    id: 9,
    thumb_img: thumb_img_10,
    brand_logo: brand_logo_10,
    job_title: 'Development, App Design',
    title: <>Alic</>,
    des: <>Ecommerce Website.</>,
    delay: '.5s',
    category: 'Web',
    filter_id: [
      'all',
      'Design Work',
      'Branding',
      'Development',
      'Illusutration',
      'App Design'
    ],
    brand_logo_view: false
  },

  {
    id: 11,
    thumb_img: thumb_img_7,
    brand_logo: brand_logo_7,
    job_title: 'Design Wok, App Design',
    title: <>Bioefia</>,
    des: <>Bioefia System Website.</>,
    delay: '.5s',
    category: 'Web',
    filter_id: [
      'all',
      'Design Work',
      'Branding',
      'Development',
      'Illusutration',
      'App Design'
    ],
    brand_logo_view: false,
    priorityHome: true
  },

  {
    id: 13,
    thumb_img: thumb_img_9,
    brand_logo: brand_logo_9,
    job_title: 'Development, App Design',
    title: <>Moevius</>,
    des: <>Music Trivia Game.</>,
    delay: '.5s',
    category: 'Apps',
    filter_id: [
      'all',
      'Design Work',
      'Branding',
      'Development',
      'Illusutration',
      'App Design'
    ],
    brand_logo_view: false
  }
]
export default portfolio_data
