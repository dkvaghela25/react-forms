import { z } from "zod";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.{8,}).*$/
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const phoneRegex = /^(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})$/
const githubUrlRegex = /^https?:\/\/github\.com\/([a-zA-Z0-9._-]+)\/?$/

export const validationSchema = z
    .object({

        fullName: z.string()
            .nonempty("Full name is required")
            .min(3, "Full name should contain at least 3 characters")
            .max(20, "Full name should contain at most 20 characters")
            .regex(/^[a-zA-Z\s]*$/, "Full name can only contain letters and spaces"),

        userName: z.string()
            .nonempty("User name is required")
            .min(3, "User name should contain at least 3 characters")
            .max(20, "User name should contain at most 20 characters")
            .regex(/^[a-zA-Z0-9_]*$/, "User Name can only contain letters, numbers, and underscores"),

        password: z.string()
            .nonempty("Password is required")
            .regex(passwordRegex, "Password must be at least 8 characters long and include one uppercase letter, one number, and one special character."),

        confirmPassword: z.string()
            .nonempty("Confirm password is required"),

        dob: z.coerce.date().or(z.literal("")),

        age: z.coerce.number()
            .nonnegative("Age can not be in negative number")
            .refine(value => value !== 0, "Age is required field")
            .min(18, "Age should not be less than 18.")
            .max(35, "Age should not be grater than 35."),

        emailId: z.string()
            .nonempty("emailId is required")
            .regex(emailRegex, "Invalid Email ID."),

        phoneNo: z.string()
            .nonempty("phoneNo is required")
            .regex(phoneRegex, "Invalid Phone No."),

        skills: z.array(z.string())
            .nonempty("skills is required field")
            .min(3, "At least 3 skills are required")
            .max(8, "At most 8 skills are allowed"),

        highestQualification: z.string()
            .nonempty("highestQualification is required"),

        accountType: z.string()
            .nonempty("accountType is required"),

        githubUrl: z.string()
            .regex(githubUrlRegex, "Invalid Github url")
            .or(z.literal("")),

    })
    .refine((data) => {
        return data.password === data.confirmPassword
    }, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });
