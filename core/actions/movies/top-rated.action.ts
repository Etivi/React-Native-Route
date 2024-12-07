import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/mapper";


export const topRatedMoviesAction = async () => {

    try {

        const { data } = await movieApi.get<MovieDBResponse>('/top_rated');

        const movies = data.results.map(MovieMapper.fromTheMovieDbToMovie);
        // console.log(JSON.stringify(movies, null, 2));

        return movies;
    
    } catch (error) {
        console.log(error);
        throw 'Cannot load now playing movies';
    }

};