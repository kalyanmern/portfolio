import React from 'react'
import { PiStudent } from "react-icons/pi";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoBagHandleSharp } from "react-icons/io5";


const Education = () => {
  return (

    <div className='bg-black p-4' id='education'>
        <p className='flex flex-row items-ceter gap-2 border border-gray-600 rounded-full w-max p-2'><PiStudent size="25"/> Work & Education</p>
        

        <div className='flex flex-row items-center gap-3 flex-wrap'>

             <div className='my-3'>

            <p className='flex flex-row items-ceter gap-2 w-max my-3 text-green-500 font-bold text-[1.2rem]'><RiGraduationCapFill size="22" color='white'/> Education</p>

            <div className='p-3 w-[18rem] rounded-lg bg-gray-700'>
                <p>Bachelors of Technology</p>
                <p>2014 - 2018</p>
                <p>Jntu Kakinada</p>
            </div>

             <div className='p-3 w-[18rem] rounded-lg bg-gray-700 my-4'>
                <p>Intermediate</p>
                <p>2012 - 2014</p>
                <p>Sri Chaitanya Junior Colllege</p>
            </div>

        </div>

         <div className='my-3'>

            <p className='flex flex-row items-ceter gap-2 w-max my-3 text-green-500 font-bold text-[1.2rem]'><IoBagHandleSharp size="22" color='white'/> Experience</p>

            <div className='p-3 w-[18rem] rounded-lg bg-gray-700'>
                <p>MERN Stack Developer</p>
                <p>2022 - Present</p>
                <p>Accenture</p>
            </div>

             <div className='p-3 w-[18rem] rounded-lg bg-gray-700 my-4'>
                <p>Intern</p>
                <p>2021 - 2022</p>
                <p>Nxt wave technologies</p>
            </div>

        </div>

        </div>
       

    </div>

  )
}

export default Education;