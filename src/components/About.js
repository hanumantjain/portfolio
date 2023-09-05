import React from 'react'

const About = () => {
  return (
    <div>
        <h1 className='text-3xl'>About</h1>
        <hr />
        <p className=' mt-5 mb-20'>Enthusiastic MSCS student with a strong foundation in 
                    computer science principles and hands-on experience 
                    in software development.</p>

        
        {/* <h1 className='text-2xl'>MS in Computer Engineering</h1>
        <h3 className='text-3xl'>George Washington University</h3> */}

        <div className='flex justify-between'>
            <div>
              <h4 className='m-2'>{">"} Website: hanumantjain.tech</h4>
              <h4 className='m-2'>{">"} Phone: +1 5712594741</h4>
              <h4 className='m-2'>{">"} Location: Arlington, VA</h4>
            </div>
            <div>
              <h4 className=' m-2'>{">"} Degree: MS in CS</h4>
              <h4 className=' m-2'>{">"} Email: hanumant.jain@gwu.edu</h4>
              <h4 className=' m-2'>{">"} Email: hanumantjain939@gmail.com</h4>
            </div>
        </div>

        <h2 className='mt-20 text-3xl'>Resume</h2>
        <hr />
        <div className='flex gap-10 m-10 justify-center items-center'>
            <button className="h-12 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg">
                      Resume
            </button>
            <div className='flex flex-wrap'>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>C</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>C++</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>Java</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>HTML</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>CSS</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>JavaScript</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>Solidity</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>React</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>TailwindCSS</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>AWS</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>Blockchain</h6>
                <h6 className='h-12 border-2 text-md py-2 px-4 m-2 w-fit'>Ethereum</h6>
            </div>
        </div>
        

    </div>
  )
}

export default About