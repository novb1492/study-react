import protypes from 'prop-types';
function Movie({title}) {
    return(
        <div>
            <h1>{title}</h1>
        </div>
    )
}
Movie.prototypes={
    title:protypes.string.isRequired
}
export default Movie;