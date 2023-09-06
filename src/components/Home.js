import React from 'react'
import Contact from './Contact'
import Education from './Education'
import Project from './Projects'
import About from './About'
import Resume from './Resume'
import Navbar from './Navbar'


const Home = () => {
  return (
    <div className='flex relative flex-col lg:flex-row'>
      
        <div className='lg:hidden flex justify-center w-screen sticky top-0 bg-gray-900 text-white'>
          <Navbar />
        </div>
        <div className=' bg-gray-900 text-white pl-20 pr-20 flex h-screen justify-center flex-col lg:basis-1/2 lg:sticky lg:top-0 lg:left-0'>
                <h1 className='text-4xl lg:text-6xl'>Hanumant Jain</h1>
                <h3 className='text-2xl lg:text-4xl mt-3'>{">"} MSCS Student </h3>
                <h3 className='text-2xl lg:text-4xl'>{">"} Software Developer</h3>
                <div className='hidden lg:flex'>
                    <Navbar />
                </div>
                
        </div>
            
          <div className=' basis-1/2 overflow-scroll lg:m-20 m-10'>
            <About />
            <Resume />
            <Education />
            <Project />
            <Contact />
          </div>
        
    </div>
    
  )
}

export default Home