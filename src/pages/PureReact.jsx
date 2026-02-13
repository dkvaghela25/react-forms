import { useState } from "react";
import Checkbox from "../components/ui/Checkbox";
import RadioButton from "../components/ui/RadioButton";
import { FiEye, FiEyeOff } from "react-icons/fi";

const PureReact = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: "",
        confirmPassword: "",
        age: "",
        emailId: "",
        phoneNo: "",
        dob: "",
        highestQualification: "",
        skills: [],
        accountType: "",
        githubUrl: ""
    })

    const [errors, setErrors] = useState({
        fullName: "",
        userName: "",
        password: "",
        confirmPassword: "",
        age: "",
        emailId: "",
        phoneNo: "",
        dob: "",
        highestQualification: "",
        skills: "",
        accountType: "",
        githubUrl: ""
    })

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "MySQL", "Git", "Docker", "CI/CD", "Redis"]
    const types = ["Student", "Professional", "Business"]

    const reset = (state) => {
        if (state === "formData") {
            setFormData({
                fullName: "",
                userName: "",
                password: "",
                confirmPassword: "",
                age: "",
                emailId: "",
                phoneNo: "",
                dob: "",
                highestQualification: "",
                skills: [],
                accountType: "",
                githubUrl: ""
            })
        }

        if (state === "errors") {
            setErrors({
                fullName: "",
                userName: "",
                password: "",
                confirmPassword: "",
                age: "",
                emailId: "",
                phoneNo: "",
                dob: "",
                highestQualification: "",
                skills: "",
                accountType: "",
                githubUrl: ""
            })
        }
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => {
            if (type === "checkbox") {
                const currentSkills = prev[name] || []; // Get existing array (e.g., formData.skills)

                return {
                    ...prev,
                    [name]: checked
                        ? [...currentSkills, value] // Add if checked
                        : currentSkills.filter((skill) => skill !== value), // Remove if unchecked
                };
            }

            return {
                ...prev,
                [name]: value,
            };
        });
    }

    const validateForm = () => {

        reset("errors")

        let validForm = true;
        const { fullName, userName, password,
            confirmPassword, age, emailId,
            phoneNo, dob, highestQualification,
            skills, accountType, githubUrl } = formData;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.{8,}).*$/
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const phoneRegex = /^(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})$/

        if (fullName.length <= 12) {
            validForm = false;
            setErrors(prev => { return { ...prev, fullName: "Full Name length must be grater then 12" } })
        }

        if (userName.length <= 12) {
            validForm = false;
            setErrors(prev => { return { ...prev, userName: "Username length must be grater then 12" } })
        }

        if (!(passwordRegex.test(password))) {
            validForm = false;
            setErrors(prev => { return { ...prev, password: "Password must be at least 8 characters long and include one uppercase letter, one number, and one special character." } })
        }

        if (password !== confirmPassword) {
            console.log(password, confirmPassword);
            validForm = false;
            setErrors(prev => { return { ...prev, confirmPassword: "Confirm password should be same as password" } })
        }

        if (!age) {
            validForm = false;
            setErrors(prev => { return { ...prev, age: "Age is required field" } })
        }

        if (!(emailRegex.test(emailId))) {
            validForm = false;
            setErrors(prev => { return { ...prev, emailId: "Invalid Email ID" } })
        }

        if (!(phoneRegex.test(phoneNo))) {
            validForm = false;
            setErrors(prev => { return { ...prev, phoneNo: "Invalid Phone No." } })
        }

        if (!highestQualification) {
            validForm = false;
            setErrors(prev => { return { ...prev, highestQualification: "Please select your highest qualification" } })
        }

        if (!dob) {
            validForm = false;
            setErrors(prev => { return { ...prev, dob: "Please select your date of birth" } })
        }

        if (!accountType) {
            validForm = false;
            setErrors(prev => { return { ...prev, accountType: "Please select your Account Type" } })
        }

        if (skills.length <= 3) {
            validForm = false;
            setErrors(prev => { return { ...prev, skills: "There should be al least 3 skills" } })
        }

        return validForm;

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handle");
        let isValid = validateForm();
        console.log(isValid);
        if (isValid) {
            alert(JSON.stringify(formData))
            console.log(formData);
            reset("errors")
            reset("formData")
        }
    }

    return (
        <div className='flex flex-col items-center p-15 w-full gap-5'>
            <div className='text-4xl font-extrabold underline'>Form Validation in Pure React</div>
            <div className='text-4xl font-extrabold mt-10'>Registration Form</div>
            <form onSubmit={handleSubmit} className='w-[50%] max-md:w-full flex flex-col items-center gap-5 text-gray-400'>
                <input
                    className='border border-gray-400 p-2 w-[70%] rounded-lg max-md:w-full'
                    type="text"
                    name='fullName'
                    placeholder='Full Name'
                    value={formData.fullName}
                    onChange={handleChange}
                />
                {errors.fullName && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.fullName}</p>}
                <input
                    className='border border-gray-400 p-2 w-[70%] rounded-lg max-md:w-full'
                    type="text"
                    name='userName'
                    placeholder='Username'
                    value={formData.userName}
                    onChange={handleChange}
                />
                {errors.userName && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.userName}</p>}
                <div className="relative w-[70%] max-md:w-full">
                    <input
                        className="border border-gray-400 p-2 w-full rounded-lg pr-10"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <span
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                    </span>
                </div>
                {errors.password && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.password}</p>}
                <div className="relative w-[70%] max-md:w-full">
                    <input
                        className="border border-gray-400 p-2 w-full rounded-lg pr-10"
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />

                    <span
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                    </span>
                </div>

                {errors.confirmPassword && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.confirmPassword}</p>}
                <input
                    className='border border-gray-400 p-2 w-[70%] rounded-lg max-md:w-full'
                    type="number"
                    name='age'
                    placeholder='Age'
                    value={formData.age}
                    onChange={handleChange}
                />
                {errors.age && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.age}</p>}
                <input
                    className='border border-gray-400 p-2 w-[70%] rounded-lg max-md:w-full'
                    type="email"
                    name='emailId'
                    placeholder='Email Id'
                    value={formData.emailId}
                    onChange={handleChange}
                />
                {errors.emailId && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.emailId}</p>}
                <input
                    className='border border-gray-400 p-2 w-[70%] rounded-lg max-md:w-full'
                    type="text"
                    name='phoneNo'
                    placeholder='Phone No'
                    value={formData.phoneNo}
                    onChange={handleChange}
                />
                {errors.phoneNo && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.phoneNo}</p>}
                <input
                    className='border border-gray-400 p-2 w-[70%] rounded-lg max-md:w-full scheme-dark'
                    type="date"
                    name='dob'
                    placeholder='Date Of Birth'
                    value={formData.dob}
                    onChange={handleChange}
                />
                {errors.dob && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.dob}</p>}
                <select onChange={handleChange} value={formData.highestQualification} placeholder="" className="bg-black border border-gray-400 p-2 w-[70%] rounded-lg max-md:w-full" name="highestQualification" id="">
                    <option value="">Highest Qualification</option>
                    <option value="High School">High School</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor’s Degree">Bachelor’s Degree</option>
                    <option value="Master’s Degree">Master’s Degree</option>
                    <option value="PhD">PhD</option>
                </select>
                {errors.highestQualification && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.highestQualification}</p>}
                <div className="border flex flex-col gap-3 border-gray-400 p-4 w-[70%] rounded-lg max-md:w-full">
                    <div className="font-extrabold">Select your skills : </div>
                    <div className="grid grid-cols-4">
                        {skills.map((skill, index) => {
                            return <Checkbox key={index} skill={skill} handleChange={handleChange} skills={formData.skills} />
                        })}
                    </div>
                </div>
                {errors.skills && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.skills}</p>}
                <div className="border border-gray-400 p-4 w-[70%] rounded-lg flex flex-col gap-3 max-md:w-full">
                    <div className="font-extrabold">Select Account Type : </div>
                    <div className="grid grid-cols-3 rounded-lg overflow-hidden">
                        {types.map((type, index) => {
                            return <RadioButton key={index} type={type} handleChange={handleChange} />
                        })}
                    </div>
                </div>
                {errors.accountType && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.accountType}</p>}
                <input
                    className='border border-gray-400 p-2 w-[70%] rounded-lg max-md:w-full'
                    type="url"
                    name='githubUrl'
                    value={formData.githubUrl}
                    placeholder='Github URL'
                    onChange={handleChange}
                />
                {errors.githubUrl && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.githubUrl}</p>}
                <input
                    type="submit"
                    className='bg-black p-[5px_30px] text-white cursor-pointer border border-b-gray-400 rounded-2xl w-fit'
                    value="Register"
                />
            </form>
        </div>
    )
};

export default PureReact;