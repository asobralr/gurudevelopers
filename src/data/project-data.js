import project_img_1 from "../../public/assets/img/project/project-img-2.jpg";
import project_brand_1 from "../../public/assets/img/project/project-brand-1.png";

import project_img_2 from "../../public/assets/img/project/project-img-1.jpg";
import project_brand_2 from "../../public/assets/img/project/project-brand-2.png";

import project_img_3 from "../../public/assets/img/project/project-img-3.jpg";
import project_brand_3 from "../../public/assets/img/project/project-brand-4.png";

import project_img_4 from "../../public/assets/img/project/project-img-4.jpg";
import project_brand_4 from "../../public/assets/img/project/project-brand-2.png";

import project_img_5 from "../../public/assets/img/project/project-img-2.jpg";
import project_brand_5 from "../../public/assets/img/project/project-brand-1.png";

import project_img_6 from "../../public/assets/img/project/project-img-1.jpg";
import project_brand_6 from "../../public/assets/img/project/project-brand-2.png";

import tlex from "../../public/assets/img/project/tlex.png";
import project_brand_7 from "../../public/assets/img/project/project-brand-4.png";

import project_img_8 from "../../public/assets/img/project/project-img-4.jpg";
import project_brand_8 from "../../public/assets/img/project/project-brand-2.png";

const project_data = [
  {
    id: 1,
    img_1: project_img_1,
    img_2: project_brand_1,
    title: "Booking Website",
    header: "Web Development",
    description: (
      <>
        Paradise, a meticulously crafted web application designed with 
Next.js for the frontend and powered by the flexible CMS, Sanity, for 
seamless backend management.
      </>
    ),
    client_name: "Atlantic 0",
    slug: "paradise",
    link_site: "https://paradiseresort.com.au/",
    client: "Atlantic 0",
    services: (
      <>
        <li>Express</li>
        <li>Mongo</li>
      </>
    ),
    status: "Live",
    imageBack: "/assets/img/project/paradise.png" ,
    thumbnails: [
      {
        img: "/assets/img/thumbnails/paradise/p1.png",
        height : 1200,
        width: 1600,
        
        description: "Home",
      },
      
      
      {
        img: "/assets/img/thumbnails/paradise/p4.png",
        height : 1200,
        width: 1600,
        description: "User profile",
      },
    ],
    features: ["Dynamic content", "API Integration", "Customized animations", "Customized CMS", "SEO", "Responsive design"],
  },
  {
    id: 2,
    img_1: project_img_2,
    img_2: project_brand_2,
    title: "3d Design",
    description: <>Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.</>,
    client_name: "Anthropy Phillip",
    budget: "200-250",
    budget_simble: "k",
    delay: ".5s",
    slug: "myhotels",
    link_site: "https://strapi-hotel-com.vercel.app",
  },
  {
    id: 4,
    img_1: project_img_4,
    img_2: project_brand_4,
    title: "ABCo",
    header: "Development Shopify, Backend and Frontend",
    description: <>Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.</>,
    client_name: "Anthropy Salim",
    budget: "200-250",
    budget_simble: "k",
    delay: ".9s",
    slug: "abco",
  },
  {
    id: 7,
    img_1: project_img_5,
    img_2: project_brand_5,
    title: "Moevius",
    description:
      "Moevius is a musical mobile game where users have to guess which song is playing. It includes a Challenge mode where the user can challenge other to see who is the best. The app includes a wide range of songs from different genres and decades.",
    client: "Riszer Software",
    budget: "200-250",
    budget_simble: "k",
    delay: ".9s",
    services: (
      <>
        <li>React Native</li>
        <li>Firebase</li>
      </>
    ),
    status: "Published (deprecated by client)",
    slug: "moevius",
    video: "/assets/videos/moevius.mp4",
    features: ["In-App purchases", "Customized animations", "In-app advertisement with AdMob", "Challenge mode using Firebase Realtime Database", "User authentication"],
    thumbnails: [
      {
        img: "/assets/img/thumbnails/moevius/moevius-1.png",
        description: "Home",
      },
      {
        img: "/assets/img/thumbnails/moevius/moevius-2.png",
        description: "Game",
      },
      {
        img: "/assets/img/thumbnails/moevius/moevius-3.png",
        description: "User profile",
      },
    ],
  },
  {
    id: 6,
    img_1: project_img_6,
    img_2: project_brand_6,
    title: "Brainbo",
    description:
      "Brainbo is a mobile app that allows the user to experience a wide range of chromotherapy immersions. It is a tool that helps the user to improve his/her mood, focus and sleep quality. It includes a Color Test to discover the user's chromotherapy profile and determine the best immersion. Immersions can be cast to Airplay or Chromecast for a better experience.",
    client: "Mycoocoon",
    budget: "200-250",
    budget_simble: "k",
    delay: ".5s",
    services: (
      <>
        <li>React Native</li>
        <li>Firebase</li>
      </>
    ),
    slug: "brainbo",
    status: "Published",
    video: "/assets/videos/brainbo.mp4",
    link_site: "https://brainbo.co",
    features: ["Social login", "Customized animations", "Video player", "Local notifications", "Airplay Integration", "IoT implementation with custom lamp for chromotherapy"],
    thumbnails: [
      {
        img: "/assets/img/thumbnails/brainbo/brainbo-1.png",
        description: "Audio List",
      },
      {
        img: "/assets/img/thumbnails/brainbo/brainbo-2.png",
        description: "Audio player",
      },
      {
        img: "/assets/img/thumbnails/brainbo/brainbo-3.png",
        description: "Yoga",
      },
    ],
  },
  {
    id: 5,
    img_1: project_img_6,
    img_2: project_brand_6,
    title: "Tlex Flow",
    description: <>Meditation and Yoga App for other Companies. Tlex offers special courses and challenges for companies. The app is available in several countries with differents language.</>,
    client: "Tlex Institute",
    budget: "200-250",
    budget_simble: "k",
    delay: ".5s",
    services: (
      <>
        <li>React Native</li>
        <li>Firebase</li>
      </>
    ),
    thumbnails: [
      {
        img: "/assets/img/thumbnails/tlex/Tlex-flow-app-7.jpg",
        description: "Audio List",
      },
      {
        img: "/assets/img/thumbnails/tlex/Tlex-flow-app-9.jpg",
        description: "Audio player",
      },
      {
        img: "/assets/img/thumbnails/tlex/Tlex-flow-app-11.jpg",
        description: "Yoga",
      },
    ],
    slug: "tlex",
    status: "Published",
    video: "/assets/videos/tlex.mp4",
    
    link_site: "https://tlexflow.app",
    features: ["Social login", "Audio Player", "Video player", "Offline", "Multi Language", "21 Days Challenge"],
  },
  {
    id: 10,
    img_1: project_img_6,
    img_2: project_brand_6,
    title: "Sudarshan Kriya App",
    description: <>We have crafted an exclusive internal application tailored for Art of Living teachers, elevating their experience through a comprehensive solution that includes a sophisticated Backoffice. Within this intuitive platform, every teacher possesses a personalized kit, ensuring  access to essential tools and resources. Our commitment to enhancing the teaching experience is exemplified through this purpose-built app, designed to empower and streamline the work of Art of Living teachers."</>,
    client: "Art of Living",
    services: (
      <>
        <li>Expo</li>
        <li>React Native</li>
        <li>Firebase</li>
      </>
    ),
    thumbnails: [
      {
        img: "/assets/img/thumbnails/aol/aolplay.png",
        description: "Audio List",
      },
      {
        img: "/assets/img/thumbnails/aol/aolplay1.png",
        description: "Audio player",
      },
      {
        img: "/assets/img/thumbnails/aol/aolplay2.png",
        description: "Yoga",
      },
    ],
    imageBack: "/assets/img/project/Teachers.png" ,
    slug: "aol",
    status: "Published",
    features: [ "Audio Player",  "Offline content", "Network detection", "Multi Language", "Battery charge detection"],
  },
  {
    id: 11,
    img_1: project_img_6,
    img_2: project_brand_6,
    title: "Bioefia",
    description: <>Since 2018, our company has relied on a cutting-edge PHP Codeigniter management system designed for scheduling fumigation visits. This dynamic system not only efficiently coordinates appointments but also generates certificates and issues timely notifications to our valued clients. Serving as an indispensable tool, it has been pivotal in elevating our service standards. We take pride in the consistent use of this platform since its inception, reflecting its enduring reliability and impact on client satisfaction.</>,
    client: "Grupo Efia",
    delay: ".5s",
    services: (
      <>
        <li>PHP </li>
        <li>Codeigniter</li>
        <li>Mysql</li>
      </>
    ),
    imageBack: "/assets/img/project/bioefia.png" , 
    slug: "bioefia",
    status: "active",
    link_site: "http://bioefiasg.com.ar",
    features: ["JS Calendar", "Datatables", "Codeingiter"],
  },
  {
    id: 13,
    img_1: project_img_6,
    img_2: project_brand_6,
    title: "Alic",
    description: <> Alic has been an integral part of our journey from the very beginning. We initiated our online presence by developing a website using WordPress. We progressed to crafting customized solutions for major their clients, creating a wholesale that integrates with their APIs. Alic's expertise has played a crucial role in shaping our technological evolution and ensuring the success of these ambitious ventures.</>,
    client: "Alic",
    delay: ".5s",
    services: (
      <>
        <li>PHP </li>
        <li>Wordpress</li>
        <li>Mysql</li>
      </>
    ),
    imageBack: "/assets/img/project/alic.png" , 
    slug: "alic",
    status: "active",
    link_site: "https://alic.com.ar/",
    features: [ "API integration", "MailChimp", "Wordpress plugin development"],
  },
  {
    id: 8,
    img_1: project_img_8,
    img_2: project_brand_8,
    title: "MiCasa",
    description:
      "MiCasa is a mobile app that allows the user to buy and sell tokenized Real Estate. It includes a wallet to store the user's tokens and a marketplace to buy and sell them. The project also includes a Real Estate tokenization web platform for the admin. Next features will include P2P operations and crowd lending.",
    client: "Grupo Casa",
    budget: "200-250",
    budget_simble: "k",
    delay: ".9s",
    slug: "micasa",
    status: "Coming soon",
    features: ["User authentication", "Email validationo", "P2P market (using Real Time Firebase Database)", "API integration", "Video preview", "Admin panel", "Blockchain integration"],
    thumbnails: [
      {
        img: "/assets/img/thumbnails/micasa/micasa-1.png",
        description: "settings",
      },
      {
        img: "/assets/img/thumbnails/micasa/micasa-2.png",
        description: "User profile",
      },
      {
        img: "/assets/img/thumbnails/micasa/micasa-3.png",
        description: "Color Test",
      },
    ],
    imageBack: "/assets/img/project/gc_site.jpg" ,
    services: (
      <>
        <li>React Native</li>
        <li>Firebase</li>
        <li>ReactJS</li>
      </>
    ),
  },
  {
    id: 9,
    title: "PAI",
    description:
      "PAI is a mobile app that works as a wallet for the PAI token. PAI uses a customized protocol to replicate the value of the Argentine Peso. The app allows the user to store, send, reveive and exchange PAI for DAI. The project also includes a web app where users can request collateralized loans in PAI.",
    client: "PAI",
    delay: ".9s",
    slug: "pai",
    status: "Coming soon",
    features: ["Biometric login", "Seed phrase recovery", "Blockchain interaction", "Exchange feature", "Oracle development", "Cusomtized protocol with liquity pool", "Web app with collateralized loans"],
    thumbnails: [
      {
        img: "/assets/img/thumbnails/pai/pai-1.png",
        description: "settings",
      },
      {
        img: "/assets/img/thumbnails/pai/pai-2.png",
        description: "User profile",
      },
      {
        img: "/assets/img/thumbnails/pai/pai-3.png",
        description: "Color Test",
      },
    ],
    imageBack: "/assets/img/project/pai.png" ,
    services: (
      <>
        <li>React Native</li>
        <li>NodeJS</li>
        <li>MongoDB</li>
      </>
    ),
  },
  {
    id: 10,
    title: "CiNKO",
    description:
      "CiNKO is a crypto wallet focused on enabling instant cross-border transfers and efficient payout distributions. It allows the user to top up mobile minutes, operate with the most popuplar stablecoins and withdraw cash using Moneygram network.",
    client: "Island Pay",
    delay: ".9s",
    slug: "cinko",
    status: "Published",
    features: ["Biometric login", "Bank trasnfers", "KYC process", "Moneygram integration", "P2P transfers", "Mobile topup", "E2E Testing"],
    thumbnails: [
      {
        img: "/assets/img/thumbnails/cinko/cinko-1.png",
        description: "settings",
      },
      {
        img: "/assets/img/thumbnails/cinko/cinko-2.png",
        description: "User profile",
      },
      {
        img: "/assets/img/thumbnails/cinko/cinko-3.png",
        description: "Color Test",
      },
    ],
    link_site: "https://cinko.io",
    video: "/assets/videos/brainbo.mp4",
    services: (
      <>
        <li>React Native</li>
      </>
    ),
  },
];
export default project_data;
