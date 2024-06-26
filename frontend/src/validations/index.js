import * as Yup from 'yup'



export const signUp = Yup.object({
    fName: Yup.string().min(3).max(15).required("Please Enter Your Firstname"),
    lName: Yup.string().min(3).max(15).required("Please Enter Your Lastname"),
    email: Yup.string().email().required("Please Enter Your valid Email"),
    password: Yup.string().min(8).required("Please Enter Your password"),
    gender: Yup.string().required("Please Select gender"),
})

