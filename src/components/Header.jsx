import React from 'react'
import { disablePageScroll,enablePageScroll} from 'scroll-lock'
import { useLocation } from 'react-router-dom'
import { brainwave } from "../assets"
import { navigation } from '../constants'
import Button from './Button'
import { useState } from 'react'
import MenuSvg from '../assets/svg/MenuSvg'
import {HamburgerMenu} from './design/Header'

const Header = () => {
    const pathname = useLocation();
    const [openNavgation, setOpenNavgation] = useState(false)
    const toggleNavigation = () =>{
        if(openNavgation){
            setOpenNavgation(false)
            enablePageScroll()

        }else{
            setOpenNavgation(true)
            disablePageScroll()
        }
    }

    const handleClick = () =>{
        if(!openNavgation) return;

        enablePageScroll()

        setOpenNavgation(false)
    }
  return (
    <div className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavgation ? 'bg-n-8': 'bg-n-8/90 backdrop-blur-sm'}`}>
        <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
            <a className='block w-[12rem] xl:mr-8' href="#hero">
            <img src={brainwave} alt="Brainwave" width={190} height={40} />
        </a>
        <nav className={` ${openNavgation ? 'flex':'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent `}>
            <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                {navigation.map((item) =>(
                    <a key={item.id} href={item.url}onClick={handleClick} className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden':""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? 'z-2 lg:text-n-1' :'lg:text-n-1/50'} lg:leading-5 lg:hover:text-n-1`}>
                        {item.title}
                    </a>
                ))}
            </div>
            <HamburgerMenu />
        </nav>
        <a href="#signup" className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'> New account </a>
         <Button className="hidden lg:flex" href="#login">
            Sign in
        </Button>
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavgation}/>
        </Button>
        </div>
        
      
    </div>
  )
}

export default Header
