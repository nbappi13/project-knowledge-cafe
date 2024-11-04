import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 max-w-7xl mx-auto border-b-2 bg-indigo-900 text-white'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img className='w-12 h-12 rounded-full' src={profile} alt="Profile" />
        </header>
    );
};

export default Header;
