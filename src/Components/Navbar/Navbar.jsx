import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

import { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-scroll';


const Navbar = () => {

    const [stricky,setStricky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
           window.scrollY > 50 ? setStricky(true) : setStricky(false)
        })

    },[])

     const [mobileMenu, setMobileMenu] = useState(false);
     const toggleMenu = ()=>{
      mobileMenu? setMobileMenu(false) : setMobileMenu(true)
     }
  


  return (
    <nav className={`container ${stricky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='space-between'/>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offers={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offers={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offers={-150} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offers={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offers={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offers={-260} duration={500} className='btn'>Context us</Link></li> 
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar