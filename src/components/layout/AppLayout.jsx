import { Outlet } from 'react-router-dom'
import Header from './Header'

const AppLayout = () => {
    return (
        <div className='w-full min-h-screen bg-black text-white'>
            <Header />
            <Outlet />
        </div>
    )
}

export default AppLayout
