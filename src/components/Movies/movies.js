import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MoviesPagination from '../moviepagination/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=3b96b6fa293869b10cc58bdc9bfdb6eb')
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.error(error));
    }, []);

    const handleDetailsClick = (movie) => {
        navigate(`/movies/${movie.id}`);
    };

    const updateMovies = (page) => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3b96b6fa293869b10cc58bdc9bfdb6eb&page=${page}`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.error(error));
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Popular Movies</h1>
            <div className="row">
                {movies.map(movie => (
                    <div key={movie.id} className="col-md-3 mb-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.release_date}</p>
                                <p className="card-text">{movie.overview}</p>
                                <button className="btn btn-primary" onClick={() => handleDetailsClick(movie)}>Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <MoviesPagination updateMovies={updateMovies} />
        </div>
    );
};

export default Movies;
