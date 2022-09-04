import { useEffect, useState } from "react";
import Movie from "./components/Movie";

function Home() {
    let [movies, setMovies] = useState([]);
    useEffect(() => {
        setMovies([{ 'title': 'hi', 'key': 1 ,'s':'s' }, { 'title': 'hi2', 'key': 2 ,'s':'s2'}, { 'title': 'hi3', 'key': 3 ,'s':'s3'}]);
    }, []);
    return (
        <div>
            <ul>
                {movies.map((movie) => <Movie title={movie.title} key={movie.key} id={movie.key} secondId={movie.s} />)}
            </ul>
        </div>
    );
}
export default Home;