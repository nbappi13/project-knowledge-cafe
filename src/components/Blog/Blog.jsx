import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-4 space-y-4'>
            <img className='w-5/6 h-1/2 mb-8' src={cover} alt={`cover pictures of the title{title}`} />
            <div className='flex justify-between'>
            <div className='w-52 h-12 flex'>
                <img className='rounded-full ' src={author_img} alt="" />
                <div className='ml-6'>
                    <h3 className='text-xl '>{author}</h3>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div className='mr-36'>
                <span>{reading_time} min read </span>
                <button
                onClick={() => handleAddToBookmark(blog)}
                  className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark> 
                </button>
            </div>
            </div>
            <h2 className="text-2xl mt-9">{title}</h2>
            <p className='text-slate-500'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">  {hash}  </a></span> )
                }
            </p>
            <button
            onClick={() => handleMarkAsRead(reading_time)}
            className='text-pink-700 font-bold underline'
            >Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;