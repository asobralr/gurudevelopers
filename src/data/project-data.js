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
    title: "Paradise Resort",
    header: "Web Development",
    description: (
      <>
        React, Next, <br /> Node, Express
      </>
    ),
    client_name: "Phillip Anthropy",
    budget: "200-250",
    budget_simble: "k",
    delay: ".9s",
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
    video: "/assets/videos/brainbo.mp4",
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
    id: 3,
    img_1: project_img_3,
    img_2: project_brand_3,
    title: "App Design",
    description: <>Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.</>,
    client_name: "Phillip Anthropy",
    budget: "200-250",
    budget_simble: "k",
    delay: ".7s",
    slug: "aol",
    link_site: "https://aolsky.com",
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
    description: <>Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.</>,
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
    slug: "tlex",
    status: "Published",
    video: "/assets/videos/tlex.mp4",
    link_site: "https://tlexflow.app",
    features: ["Social login", "Audio Player", "Video player", "Offline", "Multi Language", "21 Days Challenge"],
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
    status: "Coming soon2",
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
    video: "/assets/videos/brainbo.mp4",
    services: (
      <>
        <li>React Native</li>
        <li>Firebase</li>
        <li>ReactJS</li>
      </>
    ),
  },
];
export default project_data;
