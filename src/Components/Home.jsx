import React from 'react';
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { BsPersonVcardFill } from "react-icons/bs";
import { BiSolidLayer } from "react-icons/bi";
import { PiStudent } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import myphoto from '../assets/myphoto.jpeg';
import { BsGithub } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import Profile from './Profile';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';
import Projects from './Projects';


const Home = () => {

  return (

    <div className='min-h-screen flex flex-row gap-3 justify-start lg:justify-center items-start   flex-wrap bg-gray-800 text-white p-3 lg:p-6'>

        <div className='flex flex-row justify-between items-start gap-3 lg:sticky top-6'>

             <div className='p-1 bg-black rounded-full flex flex-col justify-center items-center '>

                <a href="#profile" title='home'>
                <BsFillPersonBadgeFill color='black' size={35} className='m-4 cursor-pointer bg-white p-1 rounded-full'/>
                </a>

                <a href="#skills" title='skills'>
                <BsPersonVcardFill color='black' size={35} className='m-4 e cursor-pointer bg-white p-1 rounded-full'/>
                </a>

                <a href="#projects" title='projects'>
                <BiSolidLayer color='black' size={35} className='m-4 cursor-pointer bg-white p-1 rounded-full'/>
                </a>

                <a href="#education" title='work experience'>
                    <PiStudent color='black' size={35} className='m-4 cursor-pointer bg-white p-1 rounded-full'/>
                </a>

                <a href="#contact" title='conatct'>
                <MdOutlineEmail color='black' size={35} className='m-4 cursor-pointer bg-white p-1 rounded-full'/>
                </a>

            </div>

            <div className='w-[16rem] bg-black flex flex-col items-center rounded-lg '>

                <img src={myphoto} alt="My Photo" className='w-40 h-60  mt-10 mb-5'/>
                <h3 className='text-2xl font-bold mb-2'>Pavan Kalyan</h3>
                <p className='text-md mb-4'>MERN Stack Developer</p>

                <div className='flex flex-row justify-center items-center gap-6'>

                    <a href="https://github.com/kalyanmern/kalyanProfile" target="_blank" rel="noopener noreferrer">
                        <BsGithub color='white' size={22} className=' cursor-pointer'/>
                    </a>    
                    <a href="https://www.instagram.com/_its_pawan_d" target="_blank" rel="noopener noreferrer">   
                        <IoLogoInstagram color='white' size={22} className='cursor-pointer'/>
                    </a>
                    <a href="https://wa.me/9182586589" target="_blank" rel="noopener noreferrer">
                        <BsWhatsapp color='white' size={22} className='cursor-pointer'/>
                    </a>    

                </div>

                <button className='w-full  mt-5 border-t border-gray-600 rounded-lg p-2 hover:bg-white hover:text-black flex justify-center items-center '>
                    <a href="https://drive.google.com/file/d/1WqDMVnp0PnSk_xubL-_9ZAVZoz-rUKBw/view?usp=sharing" download={true} className='text-md'>Download Resume</a>
                </button>

                

            </div>

        </div>

           

            <div className=' w-[100%] lg:w-[60%] xl:w-[65%]  rounded-lg flex flex-col gap-2'>
                <Profile />
                <Skills />
                <Projects />
                <Education />
                <Contact />
            </div>

    </div>

  )

}

export default Home;