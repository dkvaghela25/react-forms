import { NavLink } from 'react-router-dom'

const Header = () => {

  return (
    <header className='bg-[#202020] p-10 flex justify-between items-center'>
      <div className='text-4xl max-md:text-2xl underline decoration-black hover:decoration-blue-300'><NavLink to="/">React Forms</NavLink></div>
      <div className={`flex gap-10 max-md:shadow-[0px_20px_20px_10px_#202020] max-md:gap-5 max-md:w-full max-md:flex-col max-md:absolute max-md:items-center-safe max-md:top-25 max-md:left-0 max-md:bg-black max-md:p-5`}>
        <div className='text-2xl max-md:text-[18px] hover:text-blue-300 underline decoration-black hover:decoration-blue-300'><NavLink to="/pure-react">PureReact</NavLink></div>
        <div className='text-2xl max-md:text-[18px] hover:text-blue-300 underline decoration-black hover:decoration-blue-300'><NavLink to="/react-hook-form">ReactHookForm</NavLink></div>
        <div className='text-2xl max-md:text-[18px] hover:text-blue-300 underline decoration-black hover:decoration-blue-300'><NavLink to="/formik">Formik</NavLink></div>
      </div>
    </header>
  )
}

export default Header
