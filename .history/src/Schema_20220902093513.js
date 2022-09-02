import * as yup from "yup"

const schema = yup.object().shape({
   
    name: yup
    .string()
    .trim()
    .required("You must enter your name")
    .min(3, "name must be at least 3 characters long"),
   
})

export default schema


