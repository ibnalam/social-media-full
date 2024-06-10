import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { signUp } from '../../validations'

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
       validationSchema: signUp,
    onSubmit: () =>{
        console.log("hello sign up");
    }
    });

    const {errors,touched} = formik;
    // console.log(errors)

    // console.log(formik)

  return (
    <div className='w-full rounded-md shadow-md p-4 lg:px-11 lg:py-7 box-border border border-line_color lg:border-none'>
        <div>
            <form 
            onSubmit={formik.handleSubmit}>

                {/* first name input  */}
                <input 
                value={formik.values.fName}
                className={errors.fName && touched.fName 
                    ? 'w-full px-4 py-2 border border-line_color rounded-md focus:outline-none' 
                    : 'w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'} 
                type="text" 
                placeholder='First Name'
                onChange={formik.handleChange}
                autoComplete='off'
                onBlur={formik.handleBlur}
                name='fName'
                />
                {
                    errors.fName && touched.fName && (
                        <p className=' font-normal text-red text-sm my-2  '>{errors.fName}</p>
                    ) 
                }




                {/* last name input  */}
                <input 
                className={errors.lName && touched.lName 
                    ? 'w-full px-4 py-2 border border-line_color rounded-md focus:outline-none' 
                    : 'w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'} 
                type="text" 
                value={formik.values.lName}
                placeholder='Last Name'
                onChange={formik.handleChange}
                autoComplete='off'
                onBlur={formik.handleBlur}
                name='lName'
                />
                {
                    errors.lName && touched.lName && (
                        <p className=' font-normal text-red text-sm my-2  '>{errors.lName}</p>
                    )
                }


                {/* email input here  */}
                <input 
                className={errors.email && touched.email
                    ? 'w-full px-4 py-2 border border-line_color rounded-md focus:outline-none' 
                    : 'w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'} 
                type="email" 
                value={formik.values.email}
                placeholder='example@gmail.com'
                onChange={formik.handleChange}
                autoComplete='off'
                onBlur={formik.handleBlur}
                name='email'
                />
                 {
                    errors.email && touched.email && (
                        <p className=' font-normal text-red text-sm my-2  '>{errors.email}</p>
                    )
                }


                {/* password input here  */}
                <input 
                className={errors.password && touched.password
                    ? 'w-full px-4 py-2 border border-line_color rounded-md focus:outline-none' 
                    : 'w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'} 
                type="password" 
                value={formik.values.password}
                placeholder='password'
                onChange={formik.handleChange}
                autoComplete='off'
                onBlur={formik.handleBlur}
                name='password'
                />
                {
                    errors.password && touched.password && (
                        <p className=' font-normal text-red text-sm my-2  '>{errors.password}</p>
                    )
                }



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

                {
                    errors.gender && touched.gender && (
                        <p className=' font-normal text-red text-sm my-2  '>{errors.gender}</p>
                    )
                }




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
               <div className='lg:flex justify-between items-center '>
                    <button type='submit' className='px-6 py-2 bg-secondary_bg rounded-full text-white font-normal'>Submit</button>
                    <p className='font-normal text-lg'>Already Have An Account? <Link className=' text-primary_color font-bold' to="/">Sign In</Link></p>
               </div>
            </form>
        </div>
    </div>
  )
}

export default RegistrationForm