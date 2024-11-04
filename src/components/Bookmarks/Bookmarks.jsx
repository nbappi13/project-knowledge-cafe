import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <aside className="md:w-1/3 p-6 bg-white rounded-lg shadow-md h-full max-h-screen overflow-auto">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">Bookmarks</h2>
            <p className="text-gray-600 mb-4">Total Reading Time: {readingTime} minutes</p>
            <ul>
                {bookmarks.map((bookmark) => (
                    <li key={bookmark.id} className="mb-3 border-b pb-2">
                        <h3 className="text-lg font-semibold">{bookmark.title}</h3>
                        <p className="text-sm text-gray-500">by {bookmark.author}</p>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
};

export default Bookmarks;
