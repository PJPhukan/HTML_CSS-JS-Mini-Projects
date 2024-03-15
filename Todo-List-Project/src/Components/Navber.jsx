import React from 'react'
import Logo from "../assets/favicon.png"
const Navber = () => {
    return (
        <nav className="flex place-content-around bg-slate-500  items-center text-white p-2">
            <img src={Logo} alt="Todo" className='h-12 w-12' />
            <ul className="flex gap-6 text-xl font-semibold">
                <li className='cursor-pointer hover:font-bold px-3 transition-all '>Home</li>
                <li className='cursor-pointer hover:font-bold px-3 transition-all '>Login</li>
            </ul>
        </nav>
    )
}

export default Navber
