import Image from 'next/image'
import Link from 'next/link'

import logo from '../../../public/assets/img/logo/logo_guru.png'
import logo_white from '../../../public/assets/img/logo/logo_guru_white.png'

const nav = [
    {
        id: 1,
        link: '/',
        name: 'Home',
    },
    {
        id: 2,
        link: '/project',
        name: 'Projects',
    },
    {
        id: 3,
        link: '/team',
        name: 'Team',
    },
    {
        id: 4,
        link: '/contact',
        name: 'Contact',
    },
]

export const FooterGuru = () => {
  return (
    <footer className="footer_guru">
      <div className="container">
          <div className="footer_guru__image">
              <Link href='/'>
                <Image src={logo_white} alt='' />
              </Link>
          </div>
          <nav>
            <ul>
                {nav.map((item) => <li key={item.link}><Link href={item.link}>{item.name}</Link></li>)}
            </ul>
          </nav>
      </div>
    </footer>
  )
}
