import React, { useState } from 'react'

import image from '../Images/Group 27.png'
import google from '../Images/Google.png'
import facebook from '../Images/Facebook.png'
import lock from '../Images/lock_black_24dp 1.png'

function Landing() {
    const [active, setActive] = useState({
        signIn: true,
        joinIn: false
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Switching = (value) => {
        if(value == 'signIn'){
            setActive({
                signIn: true,
                joinIn: false
            })
        }
        else if(value == 'joinIn'){
            setActive({
                signIn: false,
                joinIn: true
            })
        }
    }

    return (
        <>
            <section className='flex items-center justify-center w-screen'>
                <div className='flex items-center justify-center w-full max-w-7xl px-3 sm:px-6 lg:px-8'>
                    <span className='flex flex-col gap-y-16 items-center justify-between w-full py-16 gap-x-24 xl:flex-row xl:items-start'>
                        <span className='flex flex-col items-start gap-y-8 justify-center w-full'>
                            <h1 className='text-xl font-bold tracking-wide italic sm:text-3xl'>
                                Explore your <i className='text-[#0096C8]'>hobby</i> or <i className='text-[#8064A2]'>passion</i>
                            </h1>
                            <span className='text-base font-light'>
                                Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                            </span>
                            <span className='text-base font-light'>
                                If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
                            </span>
                            <span className='flex items-center justify-center w-full'>
                                <img src={image} alt="loading error" />
                            </span>
                        </span>

                        <span className='flex flex-col items-center justify-end w-full gap-y-10 max-w-md'>
                            <span className='flex text-xl items-center justify-start gap-x-5 w-full'>
                                <h3 className={`cursor-pointer font-semibold ${active.signIn ? 'text-[#8064A2] ' : 'text-[#939CA3]'}`}
                                onClick={() => Switching('signIn')}>
                                    Sign In
                                </h3>
                                <h3 className={`cursor-pointer font-semibold ${active.joinIn ? 'text-[#8064A2] ' : 'text-[#939CA3]'}`}
                                onClick={() => Switching('joinIn')}>
                                    Join In
                                </h3>
                            </span>

                            {
                                active.signIn ?
                                    <span className='flex flex-col w-full gap-y-7 items-center justify-center'>
                                        <span className='flex flex-col items-center justify-center w-full  gap-y-5'>
                                            <span className='flex items-center justify-center rounded-md w-full border-2 border-[#8064A2] border-solid py-1.5 px-3 cursor-pointer'>
                                                <img src={google} alt="google here" className='h-5 w-5' />
                                                <span className='font-semibold text-black w-full text-center'>Continue with Google</span>
                                            </span>
                                            <span className='flex items-center justify-center rounded-md w-full border-2 border-[#8064A2] border-solid py-1.5 px-3 cursor-pointer'>
                                                <img src={facebook} alt="google here" className='h-5 w-5' />
                                                <span className='font-semibold text-black w-full text-center'>Continue with Facebook</span>
                                            </span>
                                        </span>
                                        <span className='flex items-center justify-center font-semibold w-full'>
                                            <span className='bg-[#939CA3] h-[0.1rem] w-full'></span>
                                            <span className='block w-full text-sm text-center mb-1.5'>or connect with</span>
                                            <span className='bg-[#939CA3] h-[0.1rem] w-full'></span>
                                        </span>
                                        <span className='flex flex-col items-center justify-center w-full  gap-y-5'>
                                            <input type="email" value={email} onChange={(ele)=> setEmail(ele.currentTarget.value)} placeholder='Email' className='border-none rounded-sm w-full outline-[#8064A2] px-2.5 py-1.5' />
                                            <input type="password" value={password} onChange={(ele)=> setPassword(ele.currentTarget.value)} placeholder='password' className='border-none rounded-sm w-full outline-[#8064A2] px-2.5 py-1.5' />
                                        </span>
                                        <span className='flex items-center justify-between w-full  gap-y-5'>
                                            <span className='flex items-center justify-start gap-x-2'>
                                                <input type="checkbox" className='mt-0.5 text-xl' />
                                                <span className='text-sm'>Remember me</span>
                                            </span>
                                            <span className='flex items-center justify-start gap-x-2'>
                                                <img src={lock} alt="lock here" className='h-5 w-5' />
                                                <span className='text-sm cursor-pointer'>forgot password?</span>
                                            </span>
                                        </span>
                                        <span className='flex items-center justify-center rounded-md w-full border-2 border-[#8064A2] border-solid py-1.5 px-3 cursor-pointer'>
                                            Continue
                                        </span>
                                    </span>
                                    :
                                    <span className='flex flex-col w-full gap-y-7 items-center justify-center'>
                                        <span className='flex flex-col items-center justify-center w-full  gap-y-5'>
                                            <span className='flex items-center justify-center rounded-md w-full border-2 border-[#8064A2] border-solid py-1.5 px-3 cursor-pointer'>
                                                <img src={google} alt="google here" className='h-5 w-5' />
                                                <span className='font-semibold text-black w-full text-center'>Continue with Google</span>
                                            </span>
                                            <span className='flex items-center justify-center rounded-md w-full border-2 border-[#8064A2] border-solid py-1.5 px-3 cursor-pointer'>
                                                <img src={facebook} alt="google here" className='h-5 w-5' />
                                                <span className='font-semibold text-black w-full text-center'>Continue with Facebook</span>
                                            </span>
                                        </span>
                                        <span className='flex items-center justify-center font-semibold w-full'>
                                            <span className='bg-[#939CA3] h-[0.1rem] w-full'></span>
                                            <span className='block w-full text-sm text-center mb-1.5'>or connect with</span>
                                            <span className='bg-[#939CA3] h-[0.1rem] w-full'></span>
                                        </span>
                                        <span className='flex flex-col items-center justify-center w-full  gap-y-5'>
                                            <input type="email" value={email} onChange={(ele)=> setEmail(ele.currentTarget.value)} placeholder='Email' className='border-none rounded-sm w-full outline-[#8064A2] px-2.5 py-1.5' />
                                            <input type="password" value={password} onChange={(ele)=> setPassword(ele.currentTarget.value)} placeholder='password' className='border-none rounded-sm w-full outline-[#8064A2] px-2.5 py-1.5' />
                                        </span>
                                        <span className='flex items-center justify-start w-full text-sm flex-wrap text-left'>
                                            By continuing you agree to our <a href="" className='text-black font-semibold inline mx-1'>Terms of Service</a> and <a href="" className='text-black font-semibold inline mx-1'>Privacy Policy.</a>
                                        </span>
                                        <span className='flex items-center text-white bg-[#8064A2] justify-center rounded-md w-full border-2 border-[#8064A2] border-solid py-1.5 px-3 cursor-pointer'>
                                            Agree and Continue
                                        </span>
                                    </span>
                            }
                        </span>
                    </span>
                </div>
            </section>
        </>
    )
}

export default Landing