import React from 'react'
import { Link } from 'react-router-dom'

const JoinCommunity = () => {
  return (<div className='mx-20 mb-50 py-20 px-5' style={{
                background: "linear-gradient(109deg, rgba(13, 13, 13, 0.50) 2.46%, rgba(13, 13, 13, 0.30) 100%)",
                backdropFilter: "blur(10px)"
            }}>

            <h4 className='text-white text-center font-semibold text-[40px] max-lg:text-[30px] max-md:text-[20px] max-sm:text-[16px]'>Join Our Community For Movies Lovers, Let’s Keep You Updated On New And Trending Movies</h4>
            <p className='text-gray-300 text-center font-normal text-[24px] max-md:text-[18px] my-10'>Type your email to join</p>

            <div className='flex flex-row max-sm:flex-col w-full justify-center items-center'>
                <div className='max-sm:w-full'>

                <input className='h-[68px] w-[550px] max-lg:w-[400px]  max-md:w-[300px]  max-sm:w-full focus:outline outline-white text-white font-medium text-[14px] px-5 cursor-pointer rounded-md' style={{
                    background: "rgba(255, 255, 255, 0.10)"
                }} placeholder='Add email here...' />
                </div>
                <div className='transition-all ease-in-out cursor-pointer hover:scale-110 flex justify-center items-center h-[68px] max-sm:mt-3 ml-10 max-sm:ml-0 w-40 max-sm:w-full px-[10px] max-sm:h-[50px] bg-white rounded-md '>

                <Link className='text-black font-semibold text-center'>Join</Link>
                </div>
            </div>
        </div>

  )
}

export default JoinCommunity