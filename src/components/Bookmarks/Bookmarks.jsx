
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3 bg-slate-200 mt-7">
      <div className='mb-4 bg-fuchsia-300 text-center'>
        <h3 className="text-3xl">Reading Time: {readingTime} </h3>
      </div>
            <h2 className="text-3xl text-center text-purple-600 pt-2">Bookmarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }

        </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks