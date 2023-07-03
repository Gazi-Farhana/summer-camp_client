import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex justify-center text-center'>
            <div>
            <img src="../../../../public/assets/images/not_found.jpg" alt="" />
                <Link to='/' className='btn mt-10 btn-accent'>Go back</Link>
            </div>
        </div>
    );
};

export default NotFound;