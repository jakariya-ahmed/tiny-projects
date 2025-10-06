import Users from '../components/core/Users';
import CreateUser from '../components/core/CreateUser';
import MemoComp from '../components/core/MemoComp';


export default function Home() {

    return(
        
        <div className='max-w-7xl mx-auto'>
            <h1 className="text-3xl">Home Page</h1>
            <CreateUser />
            <Users />
            <MemoComp />
        </div>
    );
}