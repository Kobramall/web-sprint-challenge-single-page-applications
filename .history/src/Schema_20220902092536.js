import * as yup from "yup"

const schema = yup.object().shape({
    size: yup
    .string()
    .oneOf(["Small", "Medium", "Large"], "Size is required"),

    sauce: yup
    .string()
    .oneOf(["Orignal Red", "Garlic Ranch", "BBQ Sauce", "Spinach Alfredo"], "Sauce is required"),

    special: yup
    .string()
    .trim()
    .required("You must enter text even if it's just N/A")
    .min(3, "special must be at least 3 characters long"),
    
    name: yup
    .string()
    .trim()
    .required("You must enter your name")
    .min(3, "name must be at least 3 characters long"),
   
})

export default schema


