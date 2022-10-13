import React from 'react'

const Navbar = () => {
    return (
        <nav className = "flex justify-between align-center p-3  bg-black rounded-md">
            this is a navbar, man!
            <ul className="flex flex-row justify-between">
                <li className="font-normal cursor-pointer text-[16px] mr-10">Home</li>
                <li className="font-normal cursor-pointer text-[16px] mr-10">Login/Signup</li>
                <li className="font-normal cursor-pointer text-[16px] mr-0">sidebar Icon</li>
            </ul>
        </nav>
    )
}

export default Navbar
