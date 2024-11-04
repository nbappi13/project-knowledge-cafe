import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 max-w-7xl mx-auto border-b-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
            <h1 className='text-4xl font-bold text-white'>Knowledge Cafe</h1>
            <img className='w-12 h-12 rounded-full' src={profile} alt="Profile" />
        </header>
    );
};

export default Header;
