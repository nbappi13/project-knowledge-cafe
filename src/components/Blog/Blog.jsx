import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='p-6 mb-8 bg-white rounded-lg shadow-md'>
            <img className='w-full h-64 object-cover mb-4 rounded-md' src={cover} alt={`Cover of ${title}`} />
            <div className='flex items-center mb-4'>
                <img className='w-12 h-12 rounded-full' src={author_img} alt={author} />
                <div className='ml-4'>
                    <h3 className='text-xl font-semibold'>{author}</h3>
                    <p className='text-sm text-gray-500'>{posted_date}</p>
                </div>
            </div>
            <div className='flex justify-between items-center mb-4'>
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className='text-gray-500'>
                    <span>{reading_time} minutes read </span>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className='ml-2 text-indigo-600 text-lg'><FaBookmark />
                    </button>
                </div>
            </div>
            <p className='text-gray-700'>
                {hashtags.map((hash, idx) => <span key={idx} className='mr-2'><a href="#">{hash}</a></span>)}
            </p>
            <button
                onClick={() => handleMarkAsRead(id, reading_time)}
                className='mt-4 inline-block text-indigo-700 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;
