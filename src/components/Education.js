import React from 'react'

const About = () => {
  return (
    <div id='education'>
      <h1 className=' text-3xl mt-20 head'>Education</h1>
      <hr />
        <div className='mt-10'>
            <div className='border-l-2 border-black mb-16'>
                <h1 className=' ml-8 font-bold text-lg'>Master of Science in Computer Science</h1>
                <h3 className=' ml-8'>2023 - Present</h3>
                <h3 className=' ml-8'>The George Washington Universtiy, Washington DC</h3>
            </div>
            <div className='border-l-2 border-black'>
                <h1 className='ml-8 font-bold text-lg'>B.E. in Computer Engineering</h1>
                <h3 className='ml-8'>2018 - 2022</h3>
                <h3 className='ml-8'>Savitribai Phule Pune University, Pune</h3>
            </div>
        </div>
      </div>
  )
}

export default About