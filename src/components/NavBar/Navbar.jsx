import React from 'react'
import { MdMenu } from 'react-icons/md'
import { SlEarphones } from 'react-icons/sl'
import { UpdateFollower } from 'react-mouse-follower'
import { motion} from 'framer-motion'

const NavBarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#"
  },
  {
    id: 2,
    title: "About",
    link: "#"
  },
  {
    id: 3,
    title: "Services",
    link: "#"
  },
  {
    id: 4,
    title: "Contact",
    link: "#"
  },
]




const Navbar = () => {
  return (
    <>
      <div className='bg-branDark text-white p-4 font-varela'>
      <nav>
        <motion.nav 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 0.5}}          
          className='container flex justify-between items-center' >
          {/* Logo */}
          <div>
            <a href="#" className='text-xl font-bold uppercase'>
              Playing /{ }
              <span className='font-extralight text-white/70'>Market</span>
            </a>
          </div>
          {/* Menu*/}
          <div className="hidden md:block">
            <ul className='flex items-center gap-4'>
              {NavBarMenu.map((menu) => (
                <li key={menu.id}>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: 'white',
                      zIndex: 9999,
                      followSpeed: 1.5,
                      scale: 5,
                      mixBlendMode: 'difference',
                    }}
                  >
                    <a href={menu.link} className='inline-block text-sm py-2 px-3 uppercase'>{menu.title}</a>
                  </UpdateFollower>
                </li>
              ))}

              <UpdateFollower
                mouseOptions={{
                  backgroundColor: 'white',
                  zIndex: 9999,
                  followSpeed: 1.5,
                  scale: 5,
                  mixBlendMode: 'difference',
                }}
              >
                <button className='text-xl ps-14'>
                  <SlEarphones />
                </button>
              </UpdateFollower>

            </ul>

          </div>

          <div className='md:hidden'>
            <MdMenu className='text-4xl' />
          </div>
          {/* Logo3 */}

        </motion.nav>
        </nav>
      </div>

    </>
  )
}

export default Navbar