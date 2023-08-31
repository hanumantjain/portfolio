import React from 'react'
import Contact from './Contact'
import Education from './Education'
import Project from './Projects'

const Home = () => {
  return (
    <div className='relative'>
        <div className=' grid grid-cols-2 gap-4'>
            <div className=' bg-gray-900 text-white pl-20 pr-20 flex h-screen justify-center flex-col'>
                <h1 className=' text-6xl'>Hanumant Jain</h1>
                <h3 className='text-4xl mt-3'>I'm MSCS Student</h3>
                <p className=' mt-3'>Enthusiastic MSCS student with a strong foundation in 
                    computer science principles and hands-on experience 
                    in software development.</p>
            </div>
            {/* <div className='flex flex-col gap-4'>
                <h3 className=''>ABOUT</h3>
                <h3 className=''>EDUCATION</h3>
                <h3 className=''>PROJECTS</h3>
                <h3 className=''>CONTACT</h3>
            </div> */}
            <div className=''>
            <Education />
            < Project />
            <Contact />
        </div>

        </div>
        
    </div>
    
  )
}

export default Home