import { useEffect, useState } from "react";
import Movie from "./components/Movie";

function Home() {
    let [movies, setMovies] = useState([]);
    useEffect(() => {
        setMovies([{ 'title': 'hi', 'key': 1 }, { 'title': 'hi2', 'key': 2 }, { 'title': 'hi3', 'key': 3 }]);
    }, []);
    return (
        <div>
            <ul>
                {movies.map((movie) => <Movie title={movie.title} key={movie.key} id={movie.key} />)}
            </ul>
        </div>
    );
}
export default Home;