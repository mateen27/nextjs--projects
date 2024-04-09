import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import DarkMode from './DarkMode'

function Header() {
    return (
        <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
            {/* for page navigation purposes */}
            <div className="flex gap-4">
                <MenuItem title="home" address="/" Icon={AiFillHome} />
                <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
            </div>
            {/* for the dark mode switch and the logo of the website */}
            <div className='flex items-center gap-4'>
                <DarkMode/>
                <Link href={'/'} className='flex gap-1 items-center'>
                    <span className='font-bold text-2xl bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>
                    <span className='text-xl hidden sm:inline'>Clone</span>
                </Link>
            </div>
        </div>
    )
}

export default Header