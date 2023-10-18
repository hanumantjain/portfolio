import React from 'react'
import Contact from './Contact'
import Education from './Education'
import Project from './Projects'
import About from './About'
import Resume from './Resume'
import Navbar from './Navbar'
import {TypeAnimation} from 'react-type-animation'
import Particles from 'react-particles'
import {loadFull} from 'tsparticles'
import { useCallback } from "react";


const Home = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);


  return (
    <div className='flex relative flex-col lg:flex-row' id='home'>
      
        <div className='lg:hidden flex justify-center w-screen sticky top-0 bg-gray-950 text-white'>
          <Navbar />
        </div>
        <div className=' imgbg text-white px-10 md:px-20 lg:px-20 flex h-screen justify-center flex-col lg:basis-1/2 lg:sticky lg:top-0 lg:left-0 '>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 10,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                fullScreen: {
                    enable: "false",
                    zIndex: "-1"
                  },
                style: {
                    position: 'absolute',
                    
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 90,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
                <h1 className=' text-4xl md:text-6xl lg:text-6xl head'>Hanumant Jain</h1>
                {/* <h3 className=' text-2xl md:text-4xl lg:text-4xl mt-3'> MSCS Student </h3>
                <h3 className=' text-2xl md:text-4xl lg:text-4xl'>{">"} Software Developer</h3> */}
                <div className='text-2xl md:text-3xl lg:text-3xl mt-3 head'>
                  <span>I am {">"} </span>
                  <TypeAnimation 
                    sequence={[
                      'MSCS Student',
                      2000,
                      'Software Developer',
                      2000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className=''
                     />
                </div>
                <div className='hidden lg:flex'>
                    <Navbar />
                </div>
                
        </div>
            
          <div className=' basis-1/2 lg:m-20 m-10'>
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