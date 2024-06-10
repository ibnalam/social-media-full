import React from 'react'
import LeftAuth from '../../components/authentication/LeftAuth'
import { RegistrationIcon } from '../../svg/RegisstrationIcon'
import RegistrationForm from '../../components/authentication/RegistrationForm'


const Registration = () => {
  return (
    <div className='relative'>
      <div className='w-[500px] bg-purple-100 h-[500px] rounded-full absolute -top-[220px] -left-[220px]'></div>
      <div className='container flex gap-x-6 justify-center items-center h-screen'>
      <div className='w-[50%]'>
        <LeftAuth
         icon= {<RegistrationIcon/>}
         tittle="Start Your Journey" 
         description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod hic voluptates fugit dolorum, quae perferendis cupiditate ab optio nemo alias quidem adipisci nobis sit laboriosam labore! Impedit ea vero animi!"/>
      </div>
      <div className='w-[40%]'>
        <RegistrationForm/>
      </div>
    </div>
    </div>
  )
}


export default Registration