import React from 'react'

const Contact = () => {
  return (
    <div className='m-20'>
        <h1 className='mb-20'>Contact</h1>
        <div className=' flex flex-col gap-5 '>
            <div className=''>
                <label htmlFor="name">
                    Name
                </label>
                <input type="text"
                        id='name'
                        name='name'
                        className=' w-full h-10 bg-gray-100 rounded border-gray-900 py-1 px-3 focus:border-indigo-500' />
            </div>
            <div>
                <label htmlFor="email">
                    Email
                </label>
                <input type="email"
                        id='email'
                        name='email'
                        className=' w-full h-10 bg-gray-100 rounded border-gray-900 py-1 px-3 focus:border-indigo-500' />
            </div>
            <div>
                <label htmlFor="message">
                    Message
                </label>
                <textarea name="message" 
                            id="message" 
                            className=' w-full h-32 bg-gray-100 rounded border-gray-900 py-1 px-3 focus:border-indigo-500'></textarea>
                
            </div>
        </div>
        <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg">
                  Send
                </button>
              </div>
    </div>
  )
}

export default Contact