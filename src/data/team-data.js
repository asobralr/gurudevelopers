import team_img_1 from '../../public/assets/img/team/AgusAvatar.png' //team-4-1.png'
import team_img_2 from '../../public/assets/img/team/DaroAvatar.png' //team-4-2.png'
import gonza from '../../public/assets/img/team/GonzaloAvatar.jpeg'
import nadia from '../../public/assets/img/team/NadiaAvatarok.png'
import hari from '../../public/assets/img/team/hariAvatarok.png'
import pedrito from '../../public/assets/img/team/pedroAvatarok.png'
import dari from '../../public/assets/img/team/DarioAvatar.png'
import maxi from '../../public/assets/img/team/MaxiAvatar.jpeg'

const team_data = [
  // for home 04
  {
    id: 1,
    cls: 1,
    img: team_img_1,
    name: 'Agustín Sobral',
    job_title: 'Senior React Native Developer & Founder',
    slug: 'agustin-sobral',
    feature_list: [
      <>Cras sed felis eget velit aliquet. Morbi quis commodo odio</>,
      <>
        Pharetra vel turpis nunc eget lorem dolor. Quam vulputate <br />
        dignissim
      </>,
      <>Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</>
    ],
    expricence: [
      { id: 1, title: 'Role:', info: 'Design' },
      { id: 2, title: 'Experience:', info: '14 years' }
    ],
    skill_title: 'Superpower Skills:',
    details_skill: ['Interaction Design', 'User Research', 'Figma'],
    about_info_1: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </>
    ),
    about_info_2: (
      <>
        Cras sed felis eget velit aliquet. Morbi quis commodo odio aenean sed
        adipiscing diam donec adipiscing. Nibh tellus molestie nunc non blandit
        massa enim nec. Ac feugiat sed lectus vestibulum mattis ullamcorper
        velit. Posuere morbi leo urna molestie.
      </>
    )
  },
  {
    id: 2,
    cls: 2,
    img: team_img_2,
    name: 'Dario Mira',
    job_title: 'Senior React Native Developer & Founder',
    slug: 'dario-mira',
    feature_list: [
      <>Cras sed felis eget velit aliquet. Morbi quis commodo odio</>,
      <>
        Pharetra vel turpis nunc eget lorem dolor. Quam vulputate <br />
        dignissim
      </>,
      <>Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</>
    ],
    expricence: [
      { id: 1, title: 'Role:', info: 'Design' },
      { id: 2, title: 'Experience:', info: '14 years' }
    ],
    skill_title: 'Superpower Skills:',
    details_skill: ['Interaction Design', 'User Research', 'Figma'],
    about_info_1: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </>
    ),
    about_info_2: (
      <>
        Cras sed felis eget velit aliquet. Morbi quis commodo odio aenean sed
        adipiscing diam donec adipiscing. Nibh tellus molestie nunc non blandit
        massa enim nec. Ac feugiat sed lectus vestibulum mattis ullamcorper
        velit. Posuere morbi leo urna molestie.
      </>
    )
  },

  {
    id: 3,
    cls: 2,
    img: gonza,
    name: 'Gonzalo Robledo',
    job_title: '¿Full Stack? Web Developer',
    slug: 'gonzalo-robledo',

    expricence: [
      { id: 1, title: 'Role:', info: '¿Full Stack? Developer' },
      { id: 2, title: 'Experience:', info: '1 year' }
    ],
    skill_title: 'Superpower Skills:',
    details_skill: ['React Js', 'Next Js', 'Mongo DB', 'Node Js', 'Express'],
    about_info_1: <>Informacion sobre Gonzalo...</>,
    feature_list: [
      <>List item 1</>,
      <>
        List Item 2<br />
      </>,
      <>List Item 3</>
    ],
    about_info_2: <>Mas Informacion...</>,
    address: 'Buenos Aires, ARG'
  },
  {
    id: 4,
    cls: 2,
    img: nadia,
    name: 'Nadia Aguidak',
    job_title: 'UX/UI Designer',
    slug: 'nadia-aguidak',
    feature_list: [
      <>Cras sed felis eget velit aliquet. Morbi quis commodo odio</>,
      <>
        Pharetra vel turpis nunc eget lorem dolor. Quam vulputate <br />
        dignissim
      </>,
      <>Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</>
    ],
    expricence: [
      { id: 1, title: 'Role:', info: 'Design' },
      { id: 2, title: 'Experience:', info: '14 years' }
    ],
    skill_title: 'Superpower Skills:',
    details_skill: ['Interaction Design', 'User Research', 'Figma'],
    about_info_1: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </>
    ),
    about_info_2: (
      <>
        Cras sed felis eget velit aliquet. Morbi quis commodo odio aenean sed
        adipiscing diam donec adipiscing. Nibh tellus molestie nunc non blandit
        massa enim nec. Ac feugiat sed lectus vestibulum mattis ullamcorper
        velit. Posuere morbi leo urna molestie.
      </>
    )
  },
  {
    id: 5,
    cls: 2,
    img: hari,
    name: 'Harald Solaas',
    job_title: 'Senior Developer',
    slug: 'harald-solaas',
    feature_list: [
      <>Cras sed felis eget velit aliquet. Morbi quis commodo odio</>,
      <>
        Pharetra vel turpis nunc eget lorem dolor. Quam vulputate <br />
        dignissim
      </>,
      <>Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</>
    ],
    expricence: [
      { id: 1, title: 'Role:', info: 'Design' },
      { id: 2, title: 'Experience:', info: '14 years' }
    ],
    skill_title: 'Superpower Skills:',
    details_skill: ['Interaction Design', 'User Research', 'Figma'],
    about_info_1: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </>
    ),
    about_info_2: (
      <>
        Cras sed felis eget velit aliquet. Morbi quis commodo odio aenean sed
        adipiscing diam donec adipiscing. Nibh tellus molestie nunc non blandit
        massa enim nec. Ac feugiat sed lectus vestibulum mattis ullamcorper
        velit. Posuere morbi leo urna molestie.
      </>
    )
  },
  {
    id: 6,
    cls: 2,
    img: pedrito,
    name: 'Pedro Dorr',
    job_title: 'Solidity Developer',
    slug: 'pedro-dorr',
    feature_list: [
      <>Cras sed felis eget velit aliquet. Morbi quis commodo odio</>,
      <>
        Pharetra vel turpis nunc eget lorem dolor. Quam vulputate <br />
        dignissim
      </>,
      <>Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</>
    ],
    expricence: [
      { id: 1, title: 'Role:', info: 'Design' },
      { id: 2, title: 'Experience:', info: '14 years' }
    ],
    skill_title: 'Superpower Skills:',
    details_skill: ['Interaction Design', 'User Research', 'Figma'],
    about_info_1: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </>
    ),
    about_info_2: (
      <>
        Cras sed felis eget velit aliquet. Morbi quis commodo odio aenean sed
        adipiscing diam donec adipiscing. Nibh tellus molestie nunc non blandit
        massa enim nec. Ac feugiat sed lectus vestibulum mattis ullamcorper
        velit. Posuere morbi leo urna molestie.
      </>
    )
  },
  {
    id: 7,
    cls: 2,
    img: dari,
    name: 'Dario Hoyos',
    job_title: 'Full stack Developer',
    slug: 'dario-hoyos',
    feature_list: [
      <>Cras sed felis eget velit aliquet. Morbi quis commodo odio</>,
      <>
        Pharetra vel turpis nunc eget lorem dolor. Quam vulputate <br />
        dignissim
      </>,
      <>Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</>
    ],
    expricence: [
      { id: 1, title: 'Role:', info: 'Design' },
      { id: 2, title: 'Experience:', info: '14 years' }
    ],
    skill_title: 'Superpower Skills:',
    details_skill: ['Interaction Design', 'User Research', 'Figma'],
    about_info_1: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </>
    ),
    about_info_2: (
      <>
        Cras sed felis eget velit aliquet. Morbi quis commodo odio aenean sed
        adipiscing diam donec adipiscing. Nibh tellus molestie nunc non blandit
        massa enim nec. Ac feugiat sed lectus vestibulum mattis ullamcorper
        velit. Posuere morbi leo urna molestie.
      </>
    )
  },
  {
    id: 8,
    cls: 2,
    img: maxi,
    name: 'Maximiliano Albarran',
    job_title: 'Frontend Web Developer',
    slug: 'maximiliano-albarran',
    feature_list: [
      <>Cras sed felis eget velit aliquet. Morbi quis commodo odio</>,
      <>
        Pharetra vel turpis nunc eget lorem dolor. Quam vulputate <br />
        dignissim
      </>,
      <>Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</>
    ],
    expricence: [
      { id: 1, title: 'Role:', info: 'Design' },
      { id: 2, title: 'Experience:', info: '14 years' }
    ],
    skill_title: 'Superpower Skills:',
    details_skill: ['Interaction Design', 'User Research', 'Figma'],
    about_info_1: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </>
    ),
    about_info_2: (
      <>
        Cras sed felis eget velit aliquet. Morbi quis commodo odio aenean sed
        adipiscing diam donec adipiscing. Nibh tellus molestie nunc non blandit
        massa enim nec. Ac feugiat sed lectus vestibulum mattis ullamcorper
        velit. Posuere morbi leo urna molestie.
      </>
    )
  }
]

export default team_data
