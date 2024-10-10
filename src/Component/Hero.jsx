import React from 'react'

function Hero() {
    return (
        <div className='Hero w-full h-[75vh] bg-black '>
            <div className='  mx-[20vh] h-[75vh]  py-4 '>

                <div className='w-full h-[45vh] rounded-2xl bg-yellow-400  flex items-center '>
                    <div className='  '><img className='mb-0 ' src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/320x410/assets/images/astrologer_baba.webp" alt="" /></div>
                    <div className=''>
                        <p><span>200+ Celebs recommends Psychotalk </span></p>
                        <h1>Chat With Astrologer</h1>
                        <button className='w-[20vh] h-[6vh] rounded-3xl bg-black text-center text-white font-light '>Chat Now</button>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-[4vh] mt-6'>
                    <div className='rounded-xl w-[41vh] h-[20vh] bg-white  flex-col justify-center '>
                    <div className=' '> <span className='width-[20vh] hight-[25vh]'></span></div>
                    <div><span>Chat with Astrologer</span></div>
                    </div>
                    <div className='rounded-xl w-[41vh] h-[20vh] bg-white '></div>
                    <div className='rounded-xl w-[41vh] h-[20vh] bg-white '></div>
                    <div className='rounded-xl w-[41vh] h-[20vh] bg-white '></div>

                </div>

            </div>
        </div>
    )
}

export default Hero