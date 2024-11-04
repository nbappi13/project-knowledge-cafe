import React, { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {
    const [bookmarks, setBookmarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    const handleAddToBookmark = (blog) => {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    };

    const handleMarkAsRead = (id, time) => {
        const newReadingTime = readingTime + time;
        setReadingTime(newReadingTime);
        const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
        setBookmarks(remainingBookmarks);
    };

    return (
        <>
            <Header />
            <div className='flex max-w-7xl mx-auto my-8'>
                <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} />
                <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
            </div>
        </>
    );
}

export default App;
