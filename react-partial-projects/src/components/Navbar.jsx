import { Link } from 'react-router-dom';
import Logo from '/icon.png';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <header className='max-w-6xl mx-auto bg-gray-600 px-6 py-3'>
            <div className='flex justify-between items-center'>
                <div>
                    {/* logo section  */}
                    <img src={Logo} alt="" srcset="" className='w-10 h-10' />
                </div>
                
                {/* Desktop menu section  */}
                <div className='hidden md:block'>
                    <nav className='space-x-4 text-gray-300 font-semobold'>
                        <Link className='hover:text-white transition' to='/'>Home </Link>
                        <Link className='hover:text-white transition' to='/about'>About</Link>
                        <Link className='hover:text-white transition' to='/dashboard'>Dashboard</Link>
                    </nav>
                </div>

                <div>
                    {/* call to action section  */}
                    <button className='bg-blue-900 text-white px-6 py-2 rounded-full'> Let's Start </button>
                </div>

                {/* Hamburger Icon  */}
                <div>
                    <button className='md:hidden bg-blue-800 px-4 py-2 rounded text-gray-300 cursor-pointer'
                        onClick={toggleMenu}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

            </div>
            
            {/* Mobile menu  */}
            {isOpen && 
            <div className='md:hidden px-4 pb-4 bg-gray-600'>
                <nav className='space-x-4 text-center space-y-2 mt-6 text-gray-300 font-semobold'>
                    <Link onClick={toggleMenu} className='block hover:text-white transition' to='/'>Home </Link>
                    <Link onClick={toggleMenu} className='block hover:text-white transition' to='/about'>About</Link>
                    <Link onClick={toggleMenu} className='block hover:text-white transition' to='/dashboard'>Dashboard</Link>
                </nav>
            </div>
            }



        </header>
    );
}