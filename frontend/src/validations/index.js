import * as Yup from 'yup'



export const signUp = Yup.object({
    fName: Yup.string().min(3).max(15).required("Please Enter Your Firstname"),
})

