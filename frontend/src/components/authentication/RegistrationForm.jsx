import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

const initialState = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    bYear: "",
    bMonth: "",
    bDay: "",
    gender: "",

}

const RegistrationForm = () => {
    const formik = useFormik({
       initialValues: initialState,
    //    validationSchema
    onSubmit: () =>{
        console.log("hello sign up");
    }
    });

    console.log(formik)

  return (
    <div className='w-full rounded-md shadow-md px-11 py-7 box-border'>
        <div>
            <form 
            onSubmit={formik.handleSubmit}>

                {/* first name input  */}
                <input 
                value={formik.values.fName}
                className='w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none' 
                type="text" 
                placeholder='First Name'
                onChange={formik.handleChange}
                autoComplete='off'
                onBlur={formik.handleBlur}
                name='fName'
                />


                {/* last name input  */}
                <input 
                className='w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none' 
                type="text" 
                value={formik.values.lName}
                placeholder='Last Name'
                onChange={formik.handleChange}
                autoComplete='off'
                onBlur={formik.handleBlur}
                name='lName'
                />


                {/* email input here  */}
                <input 
                className='w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none' 
                type="email" 
                value={formik.values.email}
                placeholder='example@gmail.com'
                onChange={formik.handleChange}
                autoComplete='off'
                onBlur={formik.handleBlur}
                name='email'
                />


                {/* password input here  */}
                <input 
                className='w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none' 
                type="password" 
                value={formik.values.password}
                placeholder='password'
                onChange={formik.handleChange}
                autoComplete='off'
                onBlur={formik.handleBlur}
                name='password'
                />


                {/* gender input here  */}
                <input 
                id='Mail' 
                type="radio" 
                onChange={formik.handleChange}
                autoComplete='off'
                onBlur={formik.handleBlur}
                name='gender'
                value="mail"
                />
                <label htmlFor="Mail" className=' ml-1 font-normal'>Mail</label>

                <input 
                id='feMail' 
                type="radio" 
                onChange={formik.handleChange}
                autoComplete='off'
                onBlur={formik.handleBlur}
                name='gender'  
                value="femail"
                className='mb-6 ml-6'
                />
                <label htmlFor=" feMail" className=' ml-1 font-normal'> Femail</label>

                <input 
                id='Custom' 
                type="radio" 
                autoComplete='off'
                onBlur={formik.handleBlur}
                name='gender'  
                value="custom"
                className='mb-6 ml-6'/>
                <label htmlFor="Custom" className='font-normal ml-1'>Custom</label>




               <div className='flex gap-x-7 mb-6'>
                {/* year select here  */}
                <select 
                onChange={formik.handleChange}
                autoComplete='off'
                onBlur={formik.handleBlur}
                value={formik.values.bYear}
                name='bYear'
                className='border border-line_color w-{33%} font-normals p-2'>
                    <option>Birthday Year</option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                </select>

                {/* month select here  */}
                <select  
                onChange={formik.handleChange}
                autoComplete='off'
                onBlur={formik.handleBlur}
                value={formik.values.bMonth}
                name='bMonth'
                className='border border-line_color w-{33%} font-normal  p-2'>
                    <option>Birthday Month</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                </select>

                {/* day select here  */}
                <select 
                onChange={formik.handleChange}
                autoComplete='off'
                onBlur={formik.handleBlur}
                value={formik.values.bDay}
                name='bDay'
                className='border border-line_color w-{33%} font-normal p-2'>
                    <option>Birthday Day</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                </select>

                {/* button + sign up here */}
               </div>
               <div className='flex justify-between items-center'>
               <button type='submit' className='px-6 py-2 bg-secondary_bg rounded-full text-white font-normal'>Submit</button>
               <p className='font-normal text-lg'>Already Have An Account? <Link className=' text-primary_color font-bold' to="/">Sign In</Link></p>
               </div>
            </form>
        </div>
    </div>
  )
}

export default RegistrationForm