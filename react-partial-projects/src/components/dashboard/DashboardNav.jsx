import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DashboardNav() {

    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev)

    return (
        <header className='max-w-6xl mx-auto shadow-lg px-6 py-3 md:rounded-full'>
            <nav className='flex justify-between items-center'>
                <div>
                    {/* logo section  */}
                    <Link className='text-3xl text-white' to='/dashboard'>Dashboard</Link>
                </div>
                <div className='hidden md:block'>
                    {/* menu section  */}
                    <nav className='space-x-4 text-gray-300 font-semobold'>
                        <Link className='hover:text-white transition' to='/dashboard/add-product'> Add Product </Link>
                        <Link className='hover:text-white transition' to='/dashboard/view-product'>View Product</Link>
                    </nav>
                </div>
                <div>
                    {/* call to action section  */}
                    <button className='bg-blue-900 text-white px-6 py-2 rounded-full'> Let's Start </button>
                </div>

                {/* Humburger Icon  */}
                <div className='md:hidden bg-purple-600 text-gray-300 rounded px-3 py-1'>
                    <button onClick={toggleMenu}>
                        {isOpen ? <X size={28} /> : <Menu size={28}/>}
                    </button>
                </div>

            </nav>

            {/* Mobile Menu  */}
            {isOpen &&
                <nav className='md:hidden space-x-4 space-y-2 text-center text-gray-300 font-semobold mt-6'>
                    <Link onClick={toggleMenu} className='block hover:text-white transition' to='/dashboard/add-product'> Add Product </Link>
                    <Link onClick={toggleMenu} className='block hover:text-white transition' to='/dashboard/view-product'>View Product</Link>
                </nav>
            }
                

        </header>
    );
}