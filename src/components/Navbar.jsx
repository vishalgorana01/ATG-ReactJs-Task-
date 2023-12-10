import React, { useState } from 'react'
import logo from '../Images/HobbyCue Logo v2 1.png'
import explore from '../Images/Explore.png'
import hobbies from '../Images/Hobbies.png'
import product from '../Images/Product 3.png'
import bookmark from '../Images/bookmark_black_24dp 1.png'
import notification from '../Images/notifications_black_24dp 1.png'
import dropdowm from '../Images/icons8_expand_arrow 1.png'
import searchICon from '../Images/icons8_search 1.png'
import menu from '../Images/menu_black_24dp 1.png'
import image from '../Images/Group 27.png'
import google from '../Images/Google.png'
import facebook from '../Images/Facebook.png'
import lock from '../Images/lock_black_24dp 1.png'
import logoLetter from '../Images/HobbyCue Logo v2 2.png'
import cross from '../Images/close_black_24dp (2) 1.png'



import { MdSearch } from "react-icons/md";

function Navbar() {
    const [active, setActive] = useState({
        signIn: true,
        joinIn: false
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Switching = (value) => {
        if (value == 'signIn') {
            setActive({
                signIn: true,
                joinIn: false
            })
        }
        else if (value == 'joinIn') {
            setActive({
                signIn: false,
                joinIn: true
            })
        }
    }

    const [search, setSearch] = useState('');

    const [dropdowns, setDropdowns] = useState(
        {
            explore: false,
            hobbies: false,
        }
    )

    const onHover = (given) => {
        if (given == 'explore') {
            setDropdowns({
                explore: true,
                hobbies: false
            })
        }
        else if (given == 'hobbies') {
            setDropdowns({
                explore: false,
                hobbies: true
            })
        }
    }

    const onLeave = () => {
        console.log("leave")
        setDropdowns({
            explore: false,
            hobbies: false,
        })
    }

    const [showHide, setShowHide] = useState(false)

    return (
        <>
            <section className='flex items-center justify-center w-screen'>
                <div className='flex items-center justify-center w-full max-w-7xl px-3 sm:px-6 lg:px-8'>
                    <nav className='flex items-center justify-center w-full py-2.5'>
                        <span className='flex items-center justify-between gap-x-10 w-full'>
                            <span className='flex gap-x-8 items-center justify-start w-full' >
                                <img src={logo} alt="logo here" className='h-10 sm:h-12' />
                                <span className='hidden items-center justify-center xl:flex'>
                                    <input type="text" placeholder='search' value={search} className='border-none rounded-e-none outline-[#8064A2] px-2.5 py-1.5' onChange={(ele) => setSearch(ele.currentTarget.value)} />
                                    <span className='px-2.5 py-1.5 bg-[#8064A2] text-white rounded-e-full border-1 border-solid border-[#8064A2] cursor-pointer'>
                                        <MdSearch className='text-2xl' />
                                    </span>
                                </span>
                            </span>

                            <span className='flex gap-x-5 items-center justify-end w-full' >
                                <ul className='hidden items-center justify-center gap-x-5 xl:flex'>
                                    <li className='relative flex items-center justify-center text-base gap-x-1.5 cursor-pointer'
                                        onMouseEnter={() => onHover('explore')}
                                        onMouseLeave={() => onLeave()}>
                                        <img src={explore} alt="icon here" className='h-6 w-6' />
                                        <span className='font-semibold text-black'>Explore</span>
                                        <img src={dropdowm} alt="dropdown here" />

                                        <ul className={`absolute bg-white top-6 ${dropdowns.explore ? 'flex' : 'hidden'} flex-col items-start justify-start w-60 shadow-xl border-l-[1px] border-solid border-[#939CA3]`}>
                                            <li className='border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full'>
                                                People - Community
                                            </li>
                                            <li className='border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full'>
                                                People - Venues
                                            </li>
                                            <li className='border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full'>
                                                Program - Events
                                            </li>
                                            <li className='border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full'>
                                                Products - Store
                                            </li>
                                            <li className='border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full'>
                                                Blogs
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='relative flex items-center justify-center text-base gap-x-1.5 cursor-pointer'
                                        onMouseEnter={() => onHover('hobbies')}
                                        onMouseLeave={() => onLeave()}>
                                        <img src={hobbies} alt="icon here" className='h-6 w-6' />
                                        <span className='font-semibold text-black'>Hobbies</span>
                                        <img src={dropdowm} alt="dropdown here" />
                                        <ul className={`absolute bg-white top-6 ${dropdowns.hobbies ? 'flex' : 'hidden'} flex-col items-start justify-start w-60 shadow-xl border-l-[1px] border-solid border-[#939CA3]`}>
                                            <li className='border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full'>
                                                People - Community
                                            </li>
                                            <li className='border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full'>
                                                People - Venues
                                            </li>
                                            <li className='border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full'>
                                                Program - Events
                                            </li>
                                            <li className='border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full'>
                                                Products - Store
                                            </li>
                                            <li className='border-b-[1px] px-3.5 py-1.5 border-[#939CA3] border-solid cursor-pointer w-full'>
                                                Blogs
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='flex items-center justify-center text-base gap-x-1.5 cursor-pointer'>
                                        <img src={bookmark} alt="icon here" className='h-6 w-6' />
                                    </li>
                                    <li className='flex items-center justify-center text-base gap-x-1.5 cursor-pointer'>
                                        <img src={notification} alt="icon here" className='h-6 w-6' />
                                    </li>
                                    <li className='flex items-center justify-center text-base gap-x-1.5 cursor-pointer'>
                                        <img src={product} alt="icon here" className='h-6 w-6' />
                                    </li>
                                    <button className='py-1.5 px-5 rounded-lg text-base cursor-pointer border-2 border-[#8064A2] border-solid'>
                                        sign in
                                    </button>
                                </ul>

                                <ul className='flex items-center justify-center gap-x-5 xl:hidden'>
                                    <li className='flex items-center justify-center text-base gap-x-1.5 cursor-pointer'>
                                        <img src={searchICon} alt="icon here" className='h-6 w-6' />
                                    </li>
                                    <li className='flex items-center justify-center text-base gap-x-1.5 cursor-pointer'>
                                        <img src={product} alt="icon here" className='h-6 w-6' />
                                    </li>
                                    <li className='flex items-center justify-center text-base gap-x-1.5 cursor-pointer'
                                        onClick={() => setShowHide(true)}>
                                        <img src={menu} alt="icon here" className='h-6 w-6' />
                                    </li>
                                </ul>
                            </span>
                        </span>

                        {/* on click on menu */}
                        <span className={`fixed top-0 h-screen left-0 flex flex-col items-center justify-start py-6 gap-16 px-6 duration-300 bg-white w-screen ${showHide ? 'translate-x-0' : 'translate-x-full'}`}>
                            <span className='flex items-center justify-between w-full max-w-7xl'>
                                <img src={logoLetter} alt="loading error" className='h-10 w-10 cursor-pointer' />
                                <img src={cross} alt="loading error" className='h-8 w-8 cursor-pointer'
                                onClick={() => setShowHide(false)} />
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
                                                <input type="email" value={email} onChange={(ele) => setEmail(ele.currentTarget.value)} placeholder='Email' className='border-none rounded-sm w-full outline-[#8064A2] px-2.5 py-1.5' />
                                                <input type="password" value={password} onChange={(ele) => setPassword(ele.currentTarget.value)} placeholder='password' className='border-none rounded-sm w-full outline-[#8064A2] px-2.5 py-1.5' />
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
                                                <input type="email" value={email} onChange={(ele) => setEmail(ele.currentTarget.value)} placeholder='Email' className='border-none rounded-sm w-full outline-[#8064A2] px-2.5 py-1.5' />
                                                <input type="password" value={password} onChange={(ele) => setPassword(ele.currentTarget.value)} placeholder='password' className='border-none rounded-sm w-full outline-[#8064A2] px-2.5 py-1.5' />
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
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Navbar