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

import project_img_7 from "../../public/assets/img/project/project-img-3.jpg";
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
    id: 5,
    img_1: project_img_5,
    img_2: project_brand_5,
    title: "Moevius",
    description: <>Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.</>,
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
    status: "Published. Deprecated by client.",
    slug: "moevius",
    video: "/assets/videos/moevius.mp4",
    features: ["In-App purchases", "Customized animations", "In-app advertisement with AdMob", "Challenge mode using Firebase Realtime Database", "User autentication"],
  },
  {
    id: 6,
    img_1: project_img_6,
    img_2: project_brand_6,
    title: "Brainbo",
    description: <>Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.</>,
    client: "Mycoocoon",
    budget: "200-250",
    description:
      "Brainbo is a mobile app that allows the user to experience a wide range of chromotherapy immersions. It is a tool that helps the user to improve his/her mood, focus and sleep quality. It includes a Color Test to discover the user's chromotherapy profile and determine the best immersion. Immersions can be cast to Airplay or chromecast for a better experience.",
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
    features: ["Social login", "Customized animations", "Video player", "Local notifications", "Airplay and Chromecast Integration", "IoT implementation with custom lamp for chromotherapy", "Back-office with usage statistics"],
    thumbnails: [
      {
        img: "/assets/img/thumbnails/brainbo/brainbo-1.png",
        description: "settings",
      },
      {
        img: "/assets/img/thumbnails/brainbo/brainbo-2.png",
        description: "User profile",
      },
      {
        img: "/assets/img/thumbnails/brainbo/brainbo-3.png",
        description: "Color Test",
      },
    ],
  },
  {
    id: 7,
    img_1: project_img_7,
    img_2: project_brand_7,
    title: "App Design",
    description: <>Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.</>,
    client_name: "Phillip Anthropy",
    budget: "200-250",
    budget_simble: "k",
    delay: ".7s",
    slug: "app",
  },
  {
    id: 8,
    img_1: project_img_8,
    img_2: project_brand_8,
    title: "Graphic Design",
    description: <>Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.</>,
    client_name: "Anthropy Salim",
    budget: "200-250",
    budget_simble: "k",
    delay: ".9s",
    slug: "graphic",
  },
];
export default project_data;
