'use client';

import Image from 'next/image';
import Link from 'next/link';
import { faPencil, faMobileScreen, faDesktop, faBolt } from '@fortawesome/free-solid-svg-icons';

export default function Portfolio() {
    return (
        <div className="flex flex-col text-neutral-800 bg-[url('/image/background.jpg_large')]">
            {/* Header */}
            <div className='border-b border-gray-800 pb-3 hidden lg:block'>
                <div className='flex flex-row justify-between p-4'>
                    <div className='flex flex-row justify-start'>
                        <div className='justify-start'>
                        <i className="fa-solid fa-link flex items-center justify-center rounded-full w-10 h-10 border border-gray-800" style={{color:"darkgray"}}></i>
                        </div>
                        <div className='p-2'>
                            <p className='title'>Welcome@HUONSOPANHA.portfolio</p>
                        </div>                        
                    </div>
                    <div className='p-2'>
                        <div className='flex flex-row title'>
                            {['LinkedIn', 'Dribbble', 'Instagram'].map((social, index) => (
                                <div key={social} className='flex items-end justify-end px-2'>
                                    {index > 0 && <p>/</p>}
                                    <a href='#' className='ml-2'>{social}</a>
                                </div>
                            ))}
                        </div>  
                    </div>
                </div>                                
            </div>

            {/* Main Content */}
            <div className='flex flex-col justify-center text-center text-white'>
                <div>
                    <Image src='/image/profile.jpg' alt='profile' width={160} height={160} className='rounded-full mx-auto mt-10' />
                    <div className='flex flex-row justify-center'>
                        <p className='text-sm mt-5 pr-2 text-white'>Hi, I&apos;m HUONSOPANHA</p>
                        <span className='mt-3 text-xl'>&#128075;</span>
                    </div>
                    <h1 className='text-5xl text-transparent bg-gradient-to-r from-white to-gray-500 bg-clip-text leading-tight mb-12'>
                        Building digital <br />products, brands, and <br /> experience.
                    </h1>
                    <a href='#' className='px-10 py-5 border border-gray-800 bg-[#1E1E1E] title text-gray-400 text-xs'>
                        Latest Short &nbsp <i className="fa-solid fa-arrow-up-right-from-square"></i> 
                    </a>
                </div>
                {/* Brand Section */}
                <div className='flex justify-around items-center text-center mt-20 mb-8 bg-[#1E1E1E] h-60'>
                    {['National_Bank', 'coca_cola', 'lightbox', 'Subway', 'boltshift'].map((brand, index) => (
                        <div key={index} className='flex shrink-0 h-10'>
                            <Image src={`/image/${brand}.png`} alt='logo' width={100} height={40} />
                        </div>
                    ))}
                </div>

                {/* Services Section */}
                <div className="mt-10 bg-[url('/image/background.jpg_large')]">
                    <div className='text-3xl text-transparent bg-gradient-to-r from-white to-gray-500 bg-clip-text leading-tight mt-20'>
                        <p className='hidden lg:block'>Collaborate with brands and agencies to create impactful results.</p>
                        <p className='lg:hidden'>Collaborate with brands and agencies to create impactful results.</p>
                    </div>
                    <div className='flex flex-wrap justify-center gap-5 mt-20 mb-20'>
                    <div className="flex justify-center bg-[url('/image/background.jpg_large')] flex-row mt-20 mb-20">
                <div className="flex flex-col text-start items-start bg-[#1E1E1E] border border-gray-800 text-white mr-5 pb-12 pl-5 pr-20 pt-40 p-3 lg:ml-20 ml-5">
                    <i className="fa-solid fa-pencil text-3xl"><br /><br /></i>
                    <p className="text-2xl mb-4">UX & UI</p>
                    <p className="text-xm text-gray-500 lg:hidden">Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
                    <p className="text-xm text-gray-500 hidden lg:block">
                    Designing interfaces that are <br />
                    intuitive, efficient, and <br />
                    enjoyable to use.
                    </p>
                </div>
                
                <div className="flex flex-col text-start items-start bg-[#1E1E1E] border border-gray-800 text-white mr-5 pb-12 pl-5 pr-20 pt-40 p-3 hidden lg:block">
                    <i className="fa-solid fa-mobile-screen text-3xl"><br />< br /></i>
                    <p className="text-2xl mb-4">Web & Mobile App</p>
                    <p className="text-xm text-gray-500">
                    Transforming ideas into <br />
                    exceptional web and mobile <br />
                    app experiences.
                    </p>
                </div>
                
                <div className="flex flex-col text-start items-start bg-[#1E1E1E] border border-gray-800 text-white mr-5 pb-12 pl-5 pr-20 pt-40 p-3 hidden lg:block">
                    <i className="fa-solid fa-desktop text-3xl"><br />< br /></i>
                    <p className="text-2xl mb-4">Design & Creative</p>
                    <p className="text-xm text-gray-500">
                    Crafting visually stunning <br />
                    designs that connect with <br />
                    your audience.
                    </p>
                </div>

                <div className="flex flex-col text-start items-start bg-[#1E1E1E] border border-gray-800 text-white mr-5 pb-12 pl-5 pr-20 pt-40 p-3 lg:mr-20">
                    <i className="fa-solid fa-bolt text-3xl"><br />< br /></i>
                    <p className="text-2xl mb-4">Development</p>
                    <p className="text-xm text-gray-500 lg:hidden">Bringing your vision to life with the latest technology and design trends.</p>
                    <p className="text-xm text-gray-500 hidden lg:block">
                    Bringing your vision to life <br />
                    with the latest technology <br />
                    and design trends.
                    </p>
                </div>
    </div>

                    </div>    
                </div>

                {/* Contact Section */}
                <div className='flex flex-col justify-center mt-20 border-t border-gray-800 lg:hidden'>
                    <div className='text-5xl text-transparent bg-gradient-to-r from-white to-gray-500 bg-clip-text leading-tight mt-10'>
                        <p>Tell me about your <br />next project</p>
                    </div>
                    <div className='mt-12'>
                        <a href='#' className='px-10 py-5 border border-gray-800 bg-[#1E1E1E] title text-gray-400 text-xs'>
                            Get In Touch &nbsp <i className="fa-solid fa-toolbox"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
