

import React, { useState } from 'react';

const SearchMovies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key={apiKey}&query=${searchQuery}`)
            .then(response => response.json())
            .then(data => setSearchResults(data.results))
            .catch(error => console.error(error));
    }

    return (
        <div>
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {searchResults.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchMovies;
