import React, { useState, useEffect } from 'react';

const MoviesPagination = ({ updateMovies }) => {
    const [page, setPage] = useState(1);

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    };

    useEffect(() => {
        updateMovies(page); // استدعاء دالة تحديث الأفلام عند تغيير الصفحة
    }, [page, updateMovies]);

    return (
        <div>
            <button onClick={handlePrevPage} disabled={page === 1}>
                Previous Page
            </button>
            <button onClick={handleNextPage}>Next Page</button>
        </div>
    );
}

export default MoviesPagination;
