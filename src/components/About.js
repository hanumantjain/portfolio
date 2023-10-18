import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'


const About = () => {
  return (
    <div id='about'>
        <h1 className='text-3xl'>About</h1>
        <hr />
        <p className='mt-5 mb-20'>Enthusiastic MSCS student with a strong foundation in 
                    computer science principles and hands-on experience 
                    in software development.</p>

        
        {/* <h1 className='text-2xl'>MS in Computer Engineering</h1>
        <h3 className='text-3xl'>George Washington University</h3> */}

        <div className='flex justify-between flex-col lg:flex-row'>
            <div>
              <h4 className='m-2'>{">"} Website: <span className=''> hanumantjain.tech</span></h4>
              <h4 className='m-2'>{">"} Phone: +1 {"("}571{")"} 259 4741</h4>
              <h4 className='m-2'>{">"} Location: Arlington, VA</h4>
            </div>
            <div>
              <h4 className=' m-2'>{">"} Degree: MS in CS</h4>
              <h4 className=' m-2'>{">"} Email: hanumant.jain@gwu.edu</h4>
              <h4 className=' m-2'>{">"} Email: hanumantjain939@gmail.com</h4>
            </div>
        </div>
        
        <div className='flex gap-12 justify-center mt-10 text-2xl'>
            <a href="https://github.com/hanumantjain"  ><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/hanumant-jain-621745173" ><AiFillLinkedin /></a>
            <a href="https://instagram.com/hanu_0108?igshid=NzZlODBkYWE4Ng=="><AiFillInstagram /></a>
        </div>
        
        

    </div>
  )
}

export default About