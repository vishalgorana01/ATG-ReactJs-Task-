import React from 'react'
import quote from '../Images/quote.png'
import play from '../Images/play_arrow_black_24dp 1.png'
import photo from '../Images/Ellipse 12.png'
import mic from '../Images/mic_black_24dp 1.png'

function Testimonials() {
    return (
        <>
            <section className='flex items-center justify-center w-screen'>
                <div className='flex items-center justify-center w-full max-w-4xl px-3 sm:px-6 lg:px-8'>
                    <span className='flex items-center justify-center place-items-center py-16 md:grid-cols-2'>
                        <span className='flex flex-col rounded-md py-7 px-6 gap-y-5 items-start justify-center max-w-5xl w-full'>
                            <span className='flex items-center justify-start gap-x-3.5'>
                                <img src={quote} alt="loading error" className='h-10 w-10' />
                                <h3 className='font-semibold text-xl'>Testimonials</h3>
                            </span>
                            <span className='text-[#939CA3] font-base'>
                                In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                            </span>
                            <span className='flex flex-col-reverse gap-y-3.5 items-center justify-center w-full sm:flex-row'>
                                <span className='flex items-center justify-between w-full py-1.5 px-2 rounded-md bg-[#CCC1DA]'>
                                    <span className='p-1 rounded-full bg-white cursor-pointer'>
                                        <img src={play} alt="error loading" className='h-4 w-4' />
                                    </span>
                                    <span className='relative rounded-full object-cover'>
                                        <img src={photo} alt="loading error" className='h-10 w-10' />
                                        <img src={mic} alt="loading error" className='absolute h-4 w-4 bottom-0 -left-1.5' />
                                    </span>
                                </span>

                                <span className='flex items-center justify-center gap-x-3.5 w-full sm:w-96 sm:justify-end'>
                                    <img src={photo} alt="loading error" className='h-16 w-16 rounded-full' />
                                    <span className='flex flex-col items-start justify-center'>
                                        <h3 className='text-base font-semibold text-[#8064A2]'>Shubha Nagarajan</h3>
                                        <h5 className='text-sm italic text-[#0096C8]'>Classical Dancer</h5>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </div>
            </section>
        </>
    )
}

export default Testimonials