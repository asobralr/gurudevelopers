import team_img_1 from "../../public/assets/img/team/AgusAvatar.png"; //team-4-1.png'
import team_img_2 from "../../public/assets/img/team/DaroAvatar.png"; //team-4-2.png'
import gonza from "../../public/assets/img/team/GonzaloAvatar.jpeg";
import nadia from "../../public/assets/img/team/NadiaAvatarok.png";
import hari from "../../public/assets/img/team/hariAvatarok.png";
import pedrito from "../../public/assets/img/team/pedroAvatarok.png";
import dari from "../../public/assets/img/team/DarioAvatar.png";
import maxi from "../../public/assets/img/team/MaxiAvatar.jpeg";

const team_data = [
  // for home 04
  {
    id: 1,
    cls: 1,
    img: team_img_1,
    name: "Agustín Sobral",
    job_title: "Founder & Mobile Developer",
    slug: "agustin-sobral",
    feature_list: [
      <>
        My set of skills includes database interaction, push and local notifications, UI/UX development, in-app purchases, Redux, Firebase, API integration, media streaming, user management, end-to-end testing, in-app advertisement, publishing on
        AppStore and PlayStore, etc.
      </>,
    ],
    expricence: [
      { id: 1, title: "Role:", info: "Founder | Mobile Developer" },
      { id: 2, title: "Experience:", info: "16 years" },
    ],
    skill_title: "Superpower Skills:",
    details_skill: ["Technical leader", "React Native", "Analytical thinking", "Typescript", "Javascript", "Appium", "SQL"],
    about_info_1: <>Gurudevelopers is a way to live my life doing what I love and working with my friends. I'm an experienced app developer, using React Native.</>,
    about_info_2: <>In the past, I've studied finance and economics and I've founded a small craft beer bewing company. I have 2 childs and I love to play soccer.</>,
    address: "Cañuelas, Buenos Aires, Argentina",
  },
  {
    id: 2,
    cls: 2,
    img: team_img_2,
    name: "Darío Mira",
    job_title: "Founder & Mobile Developer",
    slug: "dario-mira",
    feature_list: [
      <>
        From the first contact to the delivery of the requested solution, our work focuses on identifying and understanding the client’s needs. In this way, we seek to accompany them in the implementation of a technological development that best
        suits those needs.
      </>,
    ],
    expricence: [
      { id: 1, title: "Role:", info: " Mobile Developer Founder" },
      { id: 2, title: "Experience:", info: "19 years" },
    ],
    skill_title: "Superpower Skills:",
    details_skill: ["Team motivation", "React Native", "Creativity"],
    about_info_1: <>Gurudevelopers is amazing to me. We are friends working together with selected customer</>,
    about_info_2: <>I am art of living teacher. I guide online meditations weekly. I love to dance.</>,
    address: "Palermo,  Buenos Aires, Argentina",
  },

  {
    id: 3,
    cls: 2,
    img: gonza,
    name: "Gonzalo Robledo",
    job_title: "Fullstack Web Developer",
    slug: "gonzalo-robledo",
    birthday: "1999-05-03", // YYYY-MM-DD format
    expricence: [
      { id: 1, title: "Role:", info: "Full Stack Developer" },
      { id: 2, title: "Experience:", info: "2 years" },
    ],
    skill_title: "Superpower Skills:",
    details_skill: ["React Js", "Next Js", "Mongo DB", "Node Js", "Express", "Typescript"],
    about_info_1: <>i love what I do. I complete the projects come what may</>,
    feature_list: [<>Back-end & Frond-end developer. I have rich experience in wordpress, also I am good at Magento, Sanity. </>],
    about_info_2: <>I love to interact with people. I'm very good voleyball player</>,
    address: "Buenos Aires, ARG",
  },
  {
    id: 4,
    cls: 2,
    img: nadia,
    name: "Nadia Aguidak",
    job_title: "UX/UI Designer",
    slug: "nadia-aguidak",
    feature_list: [<>Custom Design.</>],
    expricence: [
      { id: 1, title: "Role:", info: "Design" },
      { id: 2, title: "Experience:", info: "10 years" },
    ],
    skill_title: "Superpower Skills:",
    details_skill: ["Figma", "Wordpress", "Adobe XD", "Adobe Photoshop"],
    about_info_1: <>Custom Design for your business or personal website. I have rich experience in Figma, also I am good at Adobe XD, Adobe Photoshop.</>,
    about_info_2: <>Once an year I spend 10 days in silence. Also I like to practice hot yoga.</>,
  },
  {
    id: 5,
    cls: 2,
    img: hari,
    name: "Harald Solaas",
    job_title: "Fullstack Web Developer",
    slug: "harald-solaas",
    feature_list: [<>Gurudevelopers was my first Job. I'm very grateful with them</>],
    expricence: [
      { id: 1, title: "Role:", info: "Senior React Developer" },
      { id: 2, title: "Experience:", info: "8 years" },
    ],
    skill_title: "Superpower Skills:",
    details_skill: ["React", "Team leader", "Nextjs"],
    about_info_1: <>Constantly learning new technologies and frameworks. I have rich experience in React, also I am good at Nextjs, Nodejs, Wordpress, etc.</>,
    about_info_2: <>I am an art of living teacher. I meditate twice a day. I play basketball</>,
  },
  {
    id: 6,
    cls: 2,
    img: pedrito,
    name: "Pedro Dorr",
    job_title: "Smart contract Developer",
    slug: "pedro-dorr",
    feature_list: [<>We made future Apps at Gurudevelopers. We are a great team</>],
    expricence: [
      { id: 1, title: "Role:", info: "Blockchain Developer" },
      { id: 2, title: "Experience:", info: "5 years" },
    ],
    skill_title: "Superpower Skills:",
    details_skill: ["Solidity", "Truffle", "Hardhat", "React", "Nextjs"],
    about_info_1: <>I have rich experience in Solidity, also I am good at Truffle, Hardhat, React, Nextjs, Nodejs, Wordpress, etc.</>,
    about_info_2: <>Backend developer. I love Blockchain and Smart contracts because it is the future. I am a good team leader.</>,
  },
  {
    id: 7,
    cls: 2,
    img: dari,
    name: "Dario Hoyos",
    job_title: "Web Developer",
    slug: "dario-hoyos",
    feature_list: [<> I like to be responsible to take care of projects</>],
    expricence: [
      { id: 1, title: "Role:", info: "Design" },
      { id: 2, title: "Experience:", info: "10 years" },
    ],
    skill_title: "Superpower Skills:",
    details_skill: ["PHP", "Wordpress", "Laravel", "React"],
    about_info_1: <>I have rich experience in PHP, also I am good at Laravel, React, Wordpress, etc.</>,
    about_info_2: <>I love to interact with people. I want to be influencer.</>,
  },
  {
    id: 8,
    cls: 2,
    img: maxi,
    name: "Maximiliano Albarran",
    job_title: "Junior Web Developer",
    slug: "maximiliano-albarran",
    feature_list: [<>I like to work in freedom and good companies</>],
    expricence: [
      { id: 1, title: "Role:", info: "Frontend Web Developer" },
      { id: 2, title: "Experience:", info: "1 year" },
    ],
    skill_title: "Superpower Skills:",
    details_skill: ["React JS", "Next JS", "Tailwind", "Chakra ui", "Typescript"],
    skill_title: "Superpower Skills:",
    details_skill: ["React JS", "Next JS", "Tailwind", "Chakra ui", "Typescript"],
    facebook: "",
    instagram: "https://www.instagram.com/maxialbarran_/",
    mail: "maxialbarran1806@gmail.com",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/maximiliano-albarr%C3%A1n/",
    address: "Buenos Aires, ARG",
    about_info_1: <>I have rich experience in React, also I am good at Nextjs, Nodejs, Wordpress, etc.</>,
    about_info_2: <>I'm good to work in team. Also I am a good voleyball player.</>,
  },
];

export default team_data;
