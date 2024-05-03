'use client'
import Link from "next/link";
import Logo from '../../assets/Logo.svg'
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


const links = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'About us',
    to: '#'
  },
  {
    name: 'Features',
    to: '#'
  },
  {
    name: 'Our work',
    to: '#'
  },
  {
    name: 'Resources',
    to: '#'
  }
]
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'clip';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [open])


  useEffect(() => {
    console.log(pathname);

    if (open) {
      setOpen(false);

    }
  }, [pathname])
  // close navbar if window resized
  useEffect(() => {
    const a = () => { if (window.innerWidth > 768) { setOpen(false) } }
    const el = window.addEventListener('resize', a)
    return (() => { window.removeEventListener('resize', a) })
  }, [])

  return (
    <>
      <nav className="w-full max-w-mainWidth fixed top-0 z-20 mx-auto h-24 bg-[#2d2d2d]  ">

        <div className="flex items-center justify-between h-full px-7 xl:px-[70px] py-6">
          <Link href={'#'} className="w-[120px] shrink-0">
            <Image src={Logo} width={120} height={30} alt="" />
          </Link>

          <ul className="hidden lg:flex items- gap-[50px] font-semibold text-neutural-white">
            {links.map(el => {
              return (
                <li key={el.name}><Link href={el.to} className="hover:text-primary-lilac flex flex-col items-center"><span>{el.name}</span> <div className={`w-3/4 h-1 bg-secondary-dark-lilac rounded-full ${pathname === el.to ? 'block' : 'hidden'}`} /></Link></li>
              )
            })}
          </ul>
          <div className="hidden lg:flex items-center gap-8 text-white">
            <Link href={'#'} className="text-primary-lilac hover:text-neutural-white">Sign in</Link>
            <Link href={'#'} className="px-5 py-3 rounded-2xl bg-primary-lilac hover:bg-secondary-dark-lilac">Sign Up</Link>

          </div>
          <button className=" flex lg:hidden items-center justify-center h-full aspect-square rounded-md hover:bg-zinc-600 text-2xl text-white" onClick={() => { setOpen(p => !p) }}>
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}

          </button>

        </div>

        <div className={`absolute noscrollbar lg:hidden top-[96px] w-full  h-[calc(100vh-96px)] overflow-y-auto flex flex-col items-center [&>*:not(:last-child)]:border-b border-b-primary-indigo-light bg-black/50 backdrop-blur-md transition-all duration-300 right-0 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          {links.map((el, idx) => {
            return (
              <Link href={el.to} key={`navlist${idx}`} className="w-full py-5  hover:bg-primary-lilac/40 text-center text-2xl text-white">{el.name}</Link>
            )
          })}
          <div className="w-full py-5  flex items-center justify-center gap-2 text-2xl  text-white ">
            <Link href={'#'} key={'navlistSignin'} className="px-4 py-2  hover:bg-secondary-dark-blue/50 rounded-xl ">Sign in</Link>
            <span>/</span>
            <Link href={'#'} key={'navlistSignup'} className="px-4 py-2 hover:bg-primary-lilac/50 rounded-xl">Sign Up</Link>
          </div>

        </div>

      </nav>
    </>
  );
}

export default Navbar;