import React from 'react'
import people from '../Images/groups_black_24dp (1) 1.png'
import place from '../Images/location_on_black_24dp 1.png'
import product from '../Images/shopping_basket_black_24dp (2) 1.png'
import program from '../Images/event_available_black_24dp 2.png'



function Services() {
    return (
        <>
            <section className='flex items-center justify-center w-screen'>
                <div className='flex items-center justify-center w-full max-w-7xl px-3 sm:px-6 lg:px-8'>
                    <span className='grid grid-cols-1 gap-5 place-items-center py-16 md:grid-cols-2'>
                        <span className='flex flex-col rounded-md py-7 px-6 gap-y-5 items-start justify-center w-full max-w-[30rem] border-[1px] border-solid border-[#939CA3]'>
                            <span className='flex items-center justify-start gap-x-3.5'>
                                <img src={people} alt="loading error" className='h-10 w-10' />
                                <h3 className='font-semibold text-xl'>People</h3>
                            </span>
                            <span className='text-[#939CA3] font-base'>
                                Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.
                            </span>
                            <button className='py-1 px-5 rounded-md border-2 border-solid border-[#8064A2] text-[#8064A2]'>Connect</button>
                        </span>

                        <span className='flex flex-col rounded-md py-7 px-6 gap-y-5 items-start justify-center max-w-[30rem] w-full border-[1px] border-solid border-[#939CA3]'>
                            <span className='flex items-center justify-start gap-x-3.5'>
                                <img src={place} alt="loading error" className='h-10 w-10' />
                                <h3 className='font-semibold text-xl'>Place</h3>
                            </span>
                            <span className='text-[#939CA3] font-base'>
                                Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.
                            </span>
                            <button className='py-1 px-5 rounded-md border-2 border-solid border-[#8064A2] text-[#8064A2]'>Meet up</button>
                        </span>

                        <span className='flex flex-col rounded-md py-7 px-6 gap-y-5 items-start justify-center max-w-[30rem] w-full border-[1px] border-solid border-[#939CA3]'>
                            <span className='flex items-center justify-start gap-x-3.5'>
                                <img src={product} alt="loading error" className='h-10 w-10' />
                                <h3 className='font-semibold text-xl'>Product</h3>
                            </span>
                            <span className='text-[#939CA3] font-base'>
                                Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.
                            </span>
                            <button className='py-1 px-5 rounded-md border-2 border-solid border-[#8064A2] text-[#8064A2]'>Get it</button>
                        </span>

                        <span className='flex flex-col rounded-md py-7 px-6 gap-y-5 items-start justify-center max-w-[30rem] w-full border-[1px] border-solid border-[#939CA3]'>
                            <span className='flex items-center justify-start gap-x-3.5'>
                                <img src={program} alt="loading error" className='h-10 w-10' />
                                <h3 className='font-semibold text-xl'>Program</h3>
                            </span>
                            <span className='text-[#939CA3] font-base'>
                                Find events, meetups and workshops related to your hobby.  Register or buy tickets online.
                            </span>
                            <button className='py-1 px-5 rounded-md border-2 border-solid border-[#8064A2] text-[#8064A2]'>Attend</button>
                        </span>
                    </span>
                </div>
            </section>
        </>
    )
}

export default Services