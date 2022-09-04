import protypes from 'prop-types';
import {  Link } from 'react-router-dom';

function Movie({title,id}) {
    return(
        <div>
            <h1>{title}</h1>
            <Link to={`/movie/${id}}`}>소개</Link>
        </div>
    )
}
Movie.prototypes={
    title:protypes.string.isRequired,
    id:protypes.number.isRequired
}
export default Movie;