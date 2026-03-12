import { useState } from "react";
import Checkbox from "../components/ui/Checkbox";
import RadioButton from "../components/ui/RadioButton";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "../utils/validationSchema";
import { skills, types } from "../constants";

const PureReact = () => {

  const { control, register, formState: { errors }, handleSubmit } = useForm({
    mode: "onBlur",
    resolver: zodResolver(validationSchema),
    defaultValues: {
      fullName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      age: "",
      emailId: "",
      phoneNo: "",
      dob: undefined,
      highestQualification: "",
      skills: [],
      accountType: "",
      githubUrl: ""
    }
  })

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = async (data) => {
    alert(JSON.stringify(data))
    console.log(data);
  }

  return (
    <div className='flex flex-col items-center p-15 w-full gap-5'>
      <div className='text-4xl font-extrabold underline'>Form Validation in React Hook Form</div>
      <div className='text-4xl font-extrabold mt-10'>Registration Form</div>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='w-[50%] max-md:w-full flex flex-col items-center gap-5 text-gray-400'>
        <input
          {...register("fullName")}
          className='border border-gray-400 p-2 w-[70%] rounded-lg max-md:w-full'
          type="text"
          placeholder='Full Name'
        />
        {errors.fullName && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.fullName.message}</p>}
        <input
          {...register("userName")}
          className='border border-gray-400 p-2 w-[70%] rounded-lg max-md:w-full'
          type="text"
          placeholder='Username'
        />
        {errors.userName && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.userName.message}</p>}
        <div className="relative w-[70%] max-md:w-full">
          <input
            {...register("password")}
            className="border border-gray-400 p-2 w-full rounded-lg pr-10"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />

          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </span>
        </div>
        {errors.password && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.password.message}</p>}
        <div className="relative w-[70%] max-md:w-full">
          <input
            {...register("confirmPassword")}
            className="border border-gray-400 p-2 w-full rounded-lg pr-10"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
          />

          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {!showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </span>
        </div>
        {errors.confirmPassword && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.confirmPassword.message}</p>}
        <input
          {...register("dob")}
          className='border border-gray-400 p-2 w-[70%] rounded-lg max-md:w-full scheme-dark'
          type="date"
          placeholder='Date Of Birth'
        />
        {errors.dob && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.dob.message}</p>}
        <input
          {...register("age")}
          className='border border-gray-400 p-2 w-[70%] rounded-lg max-md:w-full'
          type="number"
          placeholder='Age'
        />
        {errors.age && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.age.message}</p>}
        <input
          {...register("emailId")}
          className='border border-gray-400 p-2 w-[70%] rounded-lg max-md:w-full'
          type="email"
          placeholder='Email Id'
        />
        {errors.emailId && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.emailId.message}</p>}
        <input
          {...register("phoneNo")}
          className='border border-gray-400 p-2 w-[70%] rounded-lg max-md:w-full'
          type="text"
          placeholder='Phone No'
        />
        {errors.phoneNo && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.phoneNo.message}</p>}
        <select {...register("highestQualification")} placeholder="" className="bg-black border border-gray-400 p-2 w-[70%] rounded-lg max-md:w-full">
          <option value="">Highest Qualification</option>
          <option value="High School">High School</option>
          <option value="Diploma">Diploma</option>
          <option value="Bachelor’s Degree">Bachelor’s Degree</option>
          <option value="Master’s Degree">Master’s Degree</option>
          <option value="PhD">PhD</option>
        </select>
        {errors.highestQualification && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.highestQualification.message}</p>}
        <div className="border flex flex-col gap-3 border-gray-400 p-4 w-[70%] rounded-lg max-md:w-full">
          <div className="font-extrabold">Select your skills : </div>
          <div className="grid grid-cols-4">
            {skills.map((skill, index) => {
              return <Checkbox key={index} skill={skill} register={register} />
            })}
          </div>
        </div>
        {errors.skills && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.skills.message}</p>}
        <div className="border border-gray-400 p-4 w-[70%] rounded-lg flex flex-col gap-3 max-md:w-full">
          <div className="font-extrabold">Select Account Type : </div>
          <div className="grid grid-cols-3 rounded-lg overflow-hidden">
            {types.map((type, index) => {
              return <RadioButton key={index} type={type} register={register} />
            })}
          </div>
        </div>
        {errors.accountType && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.accountType.message}</p>}
        <input
          className='border border-gray-400 p-2 w-[70%] rounded-lg max-md:w-full'
          type="url"
          placeholder='Github URL'
          {...register("githubUrl")}
        />
        {errors.githubUrl && <p className="text-red-500 -mt-4.5 text-[16px] w-[70%]">* {errors.githubUrl.message}</p>}
        <input
          type="submit"
          className='bg-black p-[5px_30px] text-white cursor-pointer border border-b-gray-400 rounded-2xl w-fit'
          value="Register"
        />
      </form>
      <DevTool control={control} />
    </div>
  )
};

export default PureReact;