import React from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, CreditCard, User, Settings, LogOut } from 'lucide-react'
import { useAuth } from './AuthContext'

const SideBar = () => {
    const { logout } = useAuth()

    const handleLogout = async () => {
        try {
            await logout()
        } catch (error){
            console.error("Logout failed", error)
        }
    }

    const links = [
        { name: 'Overview', icon: <LayoutDashboard size={18} />, to: '/dashboard/overview' },
        { name: 'Transactions', icon: <CreditCard size={18} />, to: '/dashboard/transactions' },
        { name: 'Profile', icon: <User size={18} />, to: '/dashboard/profile' },
        { name: 'Settings', icon: <Settings size={18} />, to: '/dashboard/settings' },
    ]


    return (
        <div className='bg-gray-800 text-white w-72 h-full p-6 space-y-4'>
            <h2 className='text-2xl font-bold mb-8'>Dashboard</h2>

            <ul className='space-y-6'>
                {links.map((link) => (
                    <li key={link.to}>
                        <NavLink to={link.to}
                        className={({ isActive }) => `flex items-center gap-2 font-[roboto] text-lg text-white px-3 rounded-md transition  ${isActive ? 'text-yellow-500  font-semibold' : 'hover:bg-yellow-400 hover:text-black px-3 rounded-md transition'}`}>
                            {link.icon}
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className='absolute bottom-12'>
                <button onClick={handleLogout}
                className='flex fixed items-center gap-2 font-[roboto]  text-lg px-3 py-2 rounded-md transition text-yellow-400  active:bg-yellow-500  focus:bg-amber-300 hover:bg-yellow-400 hover:text-black'>
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </div>
    )
}


export default SideBar