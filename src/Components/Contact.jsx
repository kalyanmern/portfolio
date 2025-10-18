import { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import axios from "axios";


const Contact = () => {


    const [formdata,setFormData]=useState({email:"",name:"",subject:"",message:""})

    const handleFormData=(event)=>{

        const {name,value}=event.target

        setFormData((prev)=>{

            return {...prev,[name]:value}
        })
    }

    const onhandleSubmit=async(event)=>{

        event.preventDefault();

        const res=await axios.post("http://127.0.0.1:4000/send",{...formdata})

        if(res.status===200){
            alert("Mail sent successfully")
        }
        
    }

  return (

    <div className='p-4 bg-black' id='contact'>

        <p className='flex flex-row items-center gap-2 text-[1.1rem] border border-gray-600 rounded-full w-max p-2'><MdOutlineEmail size="25"/> Contact Me</p>


        <div className='my-3 flex flex-row items-start flex-wrap gap-6 '>
            
            <div className='w-[23rem]'>

                <p className='text-green-500 font-bold text-[1.2rem]'>Get in touch</p>
                <p className='my-2'>If you'd like to connect, feel free to reach out using the form or directly via email/phone</p>
                <p className='flex flex-row items-center gap-2 my-2'><MdEmail size="22"/> Kalyaanrao.d@gmail.com</p>
                <p className='flex flex-row items-center gap-2 my-2'><FaPhoneAlt size="20"/>+91 9182586589</p>
                <p className='flex flex-row items-center gap-2 my-2'><IoLocationSharp size="22"/> Hyderabad</p>

            </div>

            <div className='w-[22rem]'>

                <form action="" onSubmit={onhandleSubmit}>

                    <input type="text" required placeholder='Enter your name' name='name' className='bg-gray-800 w-[90%] p-2 text-[white]' onChange={(event)=>handleFormData(event)}/> <br /> <br />

                     <input type="email" required placeholder='Enter email address' name="email" className='bg-gray-800 w-[90%] p-2 text-[white]' onChange={(event)=>handleFormData(event)} /> <br /> <br />
                    
                    <input type="text" required placeholder='Enter your name' name='subject' className='bg-gray-800 w-[90%] p-2 text-[white]' onChange={(event)=>handleFormData(event)}/> <br /> <br />
                    
                    <textarea placeholder='Enter message here' required name="message" id="" cols="55" rows="7" className='bg-gray-800 w-[90%] p-2 text-[white]' onChange={(event)=>handleFormData(event)}></textarea>

                    <button type='submit' className='border-none outline-none text-white bg-blue-500 w-[90%] p-2 my-2 rounded-lg cursor-pointer'>Send message</button>



                </form>

            </div>

        </div>

    </div>

  )
}

export default Contact;