import Image from 'next/image'
import Link from 'next/link'

import logo from '../../../public/assets/img/logo/logo_guru.png'
import logo_white from '../../../public/assets/img/logo/logo_guru_white.png'
import { FaInstagram } from 'react-icons/fa6'

const nav = [
  {
    id: 1,
    link: '/',
    name: 'Home'
  },
  {
    id: 2,
    link: '/project',
    name: 'Projects'
  },
  {
    id: 3,
    link: '/team',
    name: 'Team'
  },
  {
    id: 4,
    link: '/contact',
    name: 'Contact'
  }
]

const social_networks = [
  //   {
  //     id: 1,
  //     link: 'https://www.instagram.com/gurudevelopers/',
  //     icon: <FaInstagram />
  //   }
]
// ESTRUCTURA : {link:string, icon:react_icon}
const mail = 'hello@gurudevelopers.dev'

export const FooterGuru = ({ background = true }) => {
  return (
    <footer
      className='footer_guru'
      style={{
        background: background
          ? 'linear-gradient(to bottom,#962DAA, #221DC5)'
          : '#FFFFFF',
        padding: background ? '60px 0' : '20px 0'
      }}
    >
      <div className='container'>
        <div className='container_left'>
          <div className='footer_guru__image'>
            <Link href='/'>
              <Image src={background ? logo_white : logo} alt='' width={140}/>
            </Link>
          </div>
          <nav>
            <ul>
              {nav.map(item => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    style={{ color: !background ? '#03357a' : '' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='container_right'>
          <p
            className='container_right_quote'
            style={{
              borderBottom: `2px solid ${background ? '#FFFFFF' : '#03357a'}`,
              paddingBottom: 10,
              marginTop: 7,
              color: !background ? '#03357a' : ''
            }}
          >
            Let's work together
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
            <Link
              href={`mailto:${mail}`}
              style={{
                color: !background ? '#03357a' : ''
              }}
            >
              {mail}
            </Link>
            <ul className='footer_guru_sn'>
              {social_networks.map(item => (
                <li
                  key={item.link}
                  className={!background ? 'footer_guru_sn_background' : ''}
                >
                  <Link href={item.link}>{item.icon}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
