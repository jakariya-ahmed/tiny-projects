import { Link } from 'react-router-dom';
import Logo from '/icon.png';
export default function Navbar() {
    return (
        <header className='max-w-6xl mx-auto bg-gray-600 flex justify-between items-center px-6 py-3 rounded-full'>
            <div>
                {/* logo section  */}
                <img src={Logo} alt="" srcset="" className='w-10 h-10' />
            </div>
            <div>
                {/* menu section  */}
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
        </header>
    );
}