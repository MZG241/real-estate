import Link from 'next/link'
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { SignedIn , SignedOut , UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
<Link href="/" className='flex items-center gap-2'><h1 className='font-bold text-2xl'>Estate</h1><BsBuildings  /></Link>

<form className='bg-slate-100  p-3 rounded-lg flex items-center'>
<input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24  lg:w-44 ' />

<button><FaSearch /></button>
</form>
<ul className='flex gap-6'>
<Link href='/'>
<li className='hidden md:inline'>Home</li>
</Link>

<Link href='/'>
<li className='hidden md:inline' >About</li>
</Link>


<SignedIn>
<UserButton/>
</SignedIn>

<SignedOut>
<Link href='/sign-in'>
<li className='hidden md:inline'>Signin</li>
</Link>
</SignedOut>

</ul>
        </div>
    </header>
  )
}

export default Header