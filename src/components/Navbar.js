import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="">
      <div className='hidden lg:flex lg:flex-col mt-20 lg:gap-2'>
            <Link to="about" spy={true} smooth={true} offset={-40} duration={500} >----- About</Link>
            <Link to="resume" spy={true} smooth={true} offset={-40} duration={500} >----- Resume</Link>
            <Link to="education" spy={true} smooth={true} offset={-40} duration={500} >----- Education</Link>
            <Link to="projects" spy={true} smooth={true} offset={-40} duration={500} >----- Projects</Link>
            <Link to="contact" spy={true} smooth={true} offset={-40} duration={500} >----- Contact</Link>
      </div>
      <div className='hidden md:flex md:gap-12 md:p-7'>
            <Link to="about" spy={true} smooth={true} offset={-120} duration={500} >About</Link>
            <Link to="resume" spy={true} smooth={true} offset={-120} duration={500} >Resume</Link>
            <Link to="education" spy={true} smooth={true} offset={-120} duration={500} >Education</Link>
            <Link to="projects" spy={true} smooth={true} offset={-120} duration={500} >Projects</Link>
            <Link to="contact" spy={true} smooth={true} offset={-120} duration={500} >Contact</Link>
      </div>
    </div>
  )
}

export default Navbar