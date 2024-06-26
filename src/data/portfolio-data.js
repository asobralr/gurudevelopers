// thumb img import here
import thumb_img_0 from "../../public/assets/img/img_proy/GD-proy_paradise-1.jpg";
import thumb_img_1a from "../../public/assets/img/img_proy/GD-proy_myHotels-1.jpg";
import thumb_img_1 from "../../public/assets/img/img_proy/GD-proy_CiNKO-1.jpg";
import thumb_img_2a from "../../public/assets/img/img_proy/GD-proy_ABCo-1.jpg";
import pai from "../../public/assets/img/img_proy/GD-proy_PAI-1.jpg";
import tlex from "../../public/assets/img//img_proy/GD-proy_tlex-1.jpg";
import metaverse from "../../public/assets/img/img_proy/GD-proy_Metaverse-1.jpg";
import membresia from "../../public/assets/img/img_proy/GD-proy_Membresia-AOL-1.jpg";

import thumb_img_2 from "../../public/assets/img/img_proy/GD-proy_Mycoocoon-1.jpg";

import thumb_img_3 from "../../public/assets/img/img_proy/GD-proy_Grupo-Casa-1.jpg";
import thumb_img_4 from "../../public/assets/img/project/Teachers.png";
import thumb_img_5 from "../../public/assets/img/project/pithia.png";

import thumb_img_7 from "../../public/assets/img/img_proy/GD-proy_bioefia-1.jpg";
import thumb_img_8 from "../../public/assets/img/project/eter.png";
import thumb_img_9 from "../../public/assets/img/img_proy/GD-proy_Mycoocoon-1.jpg";
import thumb_img_10 from "../../public/assets/img/project/alic.png";
import thumb_img_11 from "../../public/assets/img/project/Cinko.png";
// brand logo import here
import brand_logo_0 from "../../public/assets/img/img_proy/GD-proy_paradise-2.jpg";
import brand_logo_1 from "../../public/assets/img/project/project-inner-brand-1.png";
import brand_logo_2 from "../../public/assets/img/project/project-inner-brand-2.png";
import brand_logo_3 from "../../public/assets/img/project/project-inner-brand-3.png";
import brand_logo_4 from "../../public/assets/img/project/project-inner-brand-5.png";
import brand_logo_5 from "../../public/assets/img/project/project-inner-brand-4.png";
import brand_logo_6 from "../../public/assets/img/project/project-inner-brand-6.png";
import brand_logo_7 from "../../public/assets/img/project/project-inner-brand-5.png";
import brand_logo_8 from "../../public/assets/img/project/project-inner-brand-4.png";
import brand_logo_9 from "../../public/assets/img/project/project-inner-brand-6.png";
import brand_logo_10 from "../../public/assets/img/project/project-inner-brand-6.png";

const portfolio_data = [
  {
    id: 0,
    thumb_img: thumb_img_0,
    brand_logo: brand_logo_0,
    job_title: "Case study",
    title: <>Booking Website</>,
    des: <>Dynamic website with NextJS and Sanity.</>,
    delay: ".5s",
    category: "Web",
    filter_id: ["all", "Web", "Nextjs", "Sanity"],
    brand_logo_view: false,
    priorityHome: true,
    link_site: "https://paradiseresort.com.au/",
    slug: "paradise",
  },
  {
    id: 1,
    thumb_img: thumb_img_1,
    brand_logo: brand_logo_0,
    job_title: "Crypto wallet app",
    title: <>CiNKO</>,
    des: <>Crypto wallet built with React Native.</>,
    delay: ".5s",
    category: "Apps",
    filter_id: ["all", "Web", "Nextjs", "Sanity"],
    brand_logo_view: false,
    priorityHome: true,
    link_site: "https://paradiseresort.com.au/",
    slug: "cinko",
  },
  {
    id: 2,
    thumb_img: thumb_img_1a,
    brand_logo: brand_logo_0,
    job_title: "E-COMMERCE WEBSITE",
    title: <>myHotels</>,
    des: <>Nextjs with Strapi.</>,
    delay: ".5s",
    category: "Web",
    filter_id: ["all", "Web", "Nextjs", "Sanity"],
    brand_logo_view: false,
    priorityHome: false,
    link_site: "https://strapi-hotel-com.vercel.app",
    slug: "myhotels",
  },
  {
    id: 3,
    thumb_img: thumb_img_2a,
    brand_logo: brand_logo_1,
    job_title: "Re-seller Website",
    title: <>ABCo</>,
    des: <>MERN Application connected with Shopify.</>,
    delay: ".5s",
    category: "Web",
    filter_id: ["all", "Shopify", "Mongo", "Development"],
    stack: ["Shopify", "Mongo", "Development"],
    brand_logo_view: false,
    priorityHome: false,
    link_site: "https://abco.pairadido.com/",
    slug: "abco",
  },
  {
    id: 5,
    thumb_img: tlex,
    brand_logo: brand_logo_1,
    job_title: "Meditation & Wellness App",
    title: <>Tlex Flow</>,
    des: <>Mindfulnes app with video player.</>,
    delay: ".5s",
    category: "Apps",
    stack: ["Sql", "Node"],
    brand_logo_view: false,
    priorityHome: true,
    slug: "tlex",
  },
  {
    id: 6,
    thumb_img: thumb_img_2,
    brand_logo: brand_logo_2,
    job_title: "Chromoteraphy App",
    title: <>Brainbo</>,
    des: <>A wellness app developed wit React Native.</>,
    delay: ".5s",
    category: "Apps",
    stack: ["Sql", "Node"],
    filter_id: ["all"],
    brand_logo_view: false,
    slug: "brainbo",
  },
  {
    id: 7,
    thumb_img: thumb_img_3,
    brand_logo: brand_logo_3,
    job_title: "Blockchain App",
    title: <>MiCasa</>,
    client: "Grupo Casa",
    des: <>An app to buy and sell tokenized Real Estate.</>,
    delay: ".5s",
    category: "Apps",
    filter_id: ["all", "Web3"],
    brand_logo_view: false,
    slug: "micasa",
  },
  {
    id: 8,
    thumb_img: thumb_img_4,
    brand_logo: brand_logo_4,
    job_title: "Meditation & Wellness App",
    title: <>Teachers AOL</>,
    des: <>App for Art of living Teachers.</>,
    delay: ".5s",
    category: "Apps",
    slug: "aol",
    filter_id: ["all"],
    brand_logo_view: false,
  },
  {
    id: 9,
    thumb_img: thumb_img_10,
    brand_logo: brand_logo_10,
    job_title: "Ecommerce Website",
    slug: "alic",
    title: <>Alic</>,
    des: <>Tailored e-commerce platform for electric supplies wholesaler company.</>,
    delay: ".5s",
    category: "Web",
    filter_id: ["all"],
    brand_logo_view: false,
  },

  {
    id: 11,
    thumb_img: thumb_img_7,
    brand_logo: brand_logo_7,
    job_title: "Management System",
    title: <>Bioefia</>,
    slug: "bioefia",
    des: <>Customized management software for a pest control company.</>,
    delay: ".5s",
    category: "Web",
    filter_id: ["all"],
    brand_logo_view: false,
    priorityHome: true,
  },
  {
    id: 13,
    thumb_img: thumb_img_9,
    brand_logo: brand_logo_9,
    job_title: "Mobile Game",
    title: <>Moevius</>,
    des: <>Music trivia developed with React Native.</>,
    delay: ".5s",
    category: "Apps",
    filter_id: ["all"],
    brand_logo_view: false,
    slug: "moevius",
  },
  {
    id: 14,
    thumb_img: pai,
    brand_logo: pai,
    job_title: "Crypto Wallet App",
    title: <>PAI</>,
    des: <>A crypto wallet that uses PAI, a stablecoin paired to the Argentine Peso.</>,
    delay: ".5s",
    category: "Apps",
    filter_id: ["all"],
    brand_logo_view: false,
    slug: "pai",
  },
  {
    id: 15,
    thumb_img: membresia,
    brand_logo: membresia,
    job_title: "Membership Development",
    title: <>Art of living Membership</>,
    des: <>Membership development for a meditation platform</>,
    category: "Web",
    filter_id: ["all"],
    brand_logo_view: false,
    slug: "membresia",
  },
  {
    id: 16,
    thumb_img: metaverse,
    brand_logo: metaverse,
    job_title: "Metaverse Development",
    title: <>Decentraland</>,
    des: <>Metaverse development for a virtual reality project. Decentraland implementation</>,
    category: "Web",
    filter_id: ["all"],
    brand_logo_view: false,
    slug: "metaverse",
  },
];
export default portfolio_data;
