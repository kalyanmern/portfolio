import React from 'react'
import { BsPersonVcardFill } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiTestinglibrary } from "react-icons/si";
import ProgressBar from 'react-bootstrap/ProgressBar';

const skillsArr=[

  {
    name:"Html",
    percent:85,
    icon:<FaHtml5 color='green' size="25"/>
  },

   {
    name:"Css",
    percent:80,
    icon:<DiCss3 color='green' size="25"/>
  },

   {
    name:"Javascript",
    percent:85,
    icon:<TbBrandJavascript color='green' size="25"/>
  },

   {
    name:"React Js",
    percent:80,
    icon:<FaReact color='green' size="25"/>
  },

   {
    name:"Node Js",
    percent:85,
    icon:<FaNodeJs color='green' size="25"/>
  },

   {
    name:"Mongodb",
    percent:80,
    icon:<SiMongodb color='green' size="25"/>
  },

   {
    name:"Express Js",
    percent:80,
    icon:<SiExpress color='green' size="25"/>
  },

   {
    name:"Git hub",
    percent:80,
    icon:<ImGithub color='green' size="25"/>
  },

   {
    name:"Mysql",
    percent:85,
    icon:<GrMysql color='green' size="25"/>
  },

   {
    name:"Jest",
    percent:85,
    icon:<SiTestinglibrary color='green' size="25"/>
  }


]

const Skills = () => {
  return (

    <div className='bg-black p-4 rounded-lg' id='skills'>

        <p className=' flex flex-row items-center gap-2 border border-gray-500 rouded-full w-max p-2 rounded-full'>
            <BsPersonVcardFill size="22"/>
            Technical Skills
        </p>

        <div className='mt-2 py-4 flex flex-row justify-start items-center flex-wrap gap-3'>

          {skillsArr.map(ele=>{

            return <div className='w-[20rem] border border-gray-700 p-2 rounded-lg' key={ele.name}>

            <p className='text-right text-[0.9rem] m-0 p-0'>{ele.percent}%</p>
            <p className='flex flex-row items-center gap-1'>{ele.icon}{ele.name}</p>
            <ProgressBar  now={ele.percent} variant='white' animated style={{height:"6px",backgroundColor:"gray"}}/>
 
          </div>

            
          })}

        </div>


    </div>

  )
}

export default Skills;