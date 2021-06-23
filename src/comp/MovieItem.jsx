import {Link} from 'react-router-dom'

function MovieItem(props){
   


    return(
        <Link to = {"/movie/" + props.data.id} className="movie-item">
         <div className="movie-item-inner">
         <img src={'https://image.tmdb.org/t/p/w500/' + props.data.poster_path} alt="" />
        <h1>{props.data.title}</h1>
         </div>
        
        
    </Link>
       
    )
}

export default MovieItem;