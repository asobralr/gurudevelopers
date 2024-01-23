import Image from 'next/image'
import Link from 'next/link'

import logo from '../../../public/assets/img/logo/logo_guru.png'
import logo_white from '../../../public/assets/img/logo/logo_guru_white.png'
import { FaInstagram } from "react-icons/fa6";

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

const social_networks = []
// ESTRUCTURA : {link:string, icon:react_icon}
const mail = 'info@gurudevelopers.dev'

export const FooterGuru = ({background=true}) => {

  const exists_sn = social_networks.length > 0

  return (
    <footer className='footer_guru' style={{backgroundColor: background ? '' : 'inherit'}}>
      <div className='container'>
        <div className='container_left'>
          <div className='footer_guru__image'>
            <Link href='/'>
              <Image src={background ? logo_white : logo} alt='' />
            </Link>
          </div>
          <nav>
            <ul>
              {nav.map(item => (
                <li key={item.link} >
                  <Link href={item.link} style={{color: !background ? '#03357a' : ''}}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='container_right'>
          <Link href={`mailto:${mail}`}
            style={{
              marginTop: 7,
              paddingBottom: exists_sn ? 10 : 0,
              borderBottom: exists_sn ? `1px solid ${background ? '#FFFFFF' : '#03357a'}` : '',
              color: !background ? '#03357a' : ''
            }}
          >
            {mail}
          </Link>
          {exists_sn && (
            <ul  className="footer_guru_sn">
              {social_networks.map(item => (
                <li key={item.link} className={!background ? 'footer_guru_sn_background' : ''}>
                  <Link href={item.link}>{item.icon}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  )
}
