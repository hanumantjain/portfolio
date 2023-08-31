import React from 'react'


const Projects = () => {
  return (
    <div className='ml-20'>
        <h1 className='mb-20'>Projects</h1>
        <div className='flex flex-col gap-20'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="#" alt="The Funder's Hub"/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">The Funder's Hub</div>
                  <p className="">
                  This is the end-to-end development of a 
                  blockchain-powered startup funding platform, uniting React,
                  Solidity, Truffle IDE, and Ethereum to establish a secure 
                  and transparent fundraising ecosystem through smart contracts
                  </p>
                </div>

                <div className="px-6 pt-4 pb-2">
                  <h2>Tools Used : </h2>
                  <p>React, Solidity, Truffle IDE, Ethereum</p>
                </div>

                <div className="px-6 pt-4 pb-2 mb-10">
                  <h2>Links :</h2>
                  <div className='flex justify-around'>
                    <h1>Website</h1>
                    <h1>Code</h1>
                  </div>
                </div>

                
            </div>


            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="#" alt="Inspire Health Care"/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Inspire Health Care</div>
                  <p className="">
                  This is an Android application that brings doctors and patients 
                  closer together, employing XML, Java, and Google Firebase;
                     additionally, integrated a COVID tracker to enhance its healthcare capabilities.
                  </p>
                </div>

                <div className="px-6 pt-4 pb-2">
                  <h2>Tools Used :</h2>
                  <p>Android Studio, Java, Google Firebase, XML, Noble Covid API</p>
                </div>

                <div className="px-6 pt-4 pb-2 mb-10">
                  <h2>Links :</h2>
                  <div className='flex justify-around'>
                    <h1>Website</h1>
                    <h1>Code</h1>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects