import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'


function Movie(){

    const { id } = useParams()

    const[movie, setMovie] = useState([])


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/'+ id + '?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU')
        .then(res => res.json())
        .then(data => {
            setMovie(data)
        })
    },[])

console.log(movie)

if (!movie) return null
    return (
        <div className="movie">
            <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt="" />

            <div className="movie-text">

            <h1>{movie.title}({movie.original_title})</h1>
            
            <h3>{movie.tagline}</h3>
            <p>{movie.overview}</p>
            
            </div>

        </div>
    )
}

export default Movie