import { Link } from 'react-router-dom';

export default function DashboardNav() {
    return (
        <header className='max-w-6xl mx-auto shadow-lg flex justify-between items-center px-6 py-3 rounded-full'>
            <div>
                {/* logo section  */}
                <Link className='text-3xl text-white' to='/dashboard'>Dashboard</Link>
            </div>
            <div>
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
        </header>
    );
}