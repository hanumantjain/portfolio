import React from 'react'
import Contact from './Contact'
import Education from './Education'
import Project from './Projects'
import About from './About'

const Home = () => {
  return (
    <div className='flex relative'>
        <div className=' bg-gray-900 text-white pl-20 pr-20 flex h-screen justify-center flex-col basis-1/2 sticky top-0 left-0'>
                <h1 className=' text-6xl'>Hanumant Jain</h1>
                <h3 className='text-4xl mt-3'>I'm MSCS Student Software Developer</h3>
                
      </div>
            
            {/* <div className='flex flex-col gap-4'>
                <h3 className=''>ABOUT</h3>
                <h3 className=''>EDUCATION</h3>
                <h3 className=''>PROJECTS</h3>
                <h3 className=''>CONTACT</h3>
            </div> */}
          <div className=' basis-1/2 overflow-scroll m-20'>
            <About />
            <Education />
            < Project />
            <Contact />
          </div>
        
    </div>
    
  )
}

export default Home