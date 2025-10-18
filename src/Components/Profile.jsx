

import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';

const Profile = () => {
return (
    <div className='bg-black p-4 rounded-lg' id='profile'>
        <span className='text-[1.5rem]'>Hello, It's me</span> <TypeAnimation
      sequence={["Pavan kalyan", 2000]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.5rem', display: 'inline-block',color:"yellow" }}
      repeat={1}
      cursor={false}
    /> <br />

        <span className='text-[1.5rem]'>And I'm a</span> <TypeAnimation
      sequence={[" MERN Stack Developer", 2000]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.5rem', display: 'inline-block', color:"#34a4eb",fontWeight:"bold" }}
      repeat={1}
      cursor={false}
    />
        <p className='w-[95%] md:w-[50%] mt-2'>

            I am a passionate and results-driven MERN Stack Developer with 3+ years of hands-on experience building scalable, responsive, and high-performance web applications. I specialize in developing full-stack solutions using MongoDB, Express.js, React.js, and Node.js, with a strong focus on clean code, modular architecture, and RESTful API design.
            Over the years, I’ve worked on diverse projects—from dynamic dashboards and real-time applications to fully-featured eCommerce platforms. I’m comfortable working across the entire development lifecycle: from planning and backend API development to frontend design and deployment.
        </p>

        <div className='flex flex-row justify-start items-center flex-wrap gap-3'>

            <div className='p-2 border border-gray-500 w-max flex flex-row gap-3 justify-center items-center rounded-lg mt-4 mb-4'>
                <CountUp end={10} duration={3} className='text-[2rem]' suffix="+"/>
                <p className='m-0'> Completed  <br /> Projects</p>
            </div>

            <div className='p-2 border border-gray-500 w-max flex flex-row gap-3 justify-center items-center rounded-lg mt-4 mb-4'>
                <CountUp end={3} duration={3} className='text-[2rem]' suffix="+"/>
                <p className='m-0'> Years of <br /> Experience</p>
            </div>

            <div className='p-2 border border-gray-500 w-max flex flex-row gap-3 justify-center items-center rounded-lg mt-4 mb-4'>
                <CountUp end={2} duration={3} className='text-[2rem]'/>
                <p className='m-0'> Winning <br /> Awards</p>
            </div>
           
             
        </div>
    </div>
)
}

export default Profile;