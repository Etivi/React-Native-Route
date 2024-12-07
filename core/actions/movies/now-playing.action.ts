import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/mapper";


export const nowPlayingMoviesAction = async () => {

    try {

        const { data } = await movieApi.get<MovieDBResponse>('/now_playing');
        // console.log(JSON.stringify(data, null, 2));

        const movies = data.results.map(MovieMapper.fromTheMovieDbToMovie);

        console.log(JSON.stringify(movies, null, 2));

        
        
    } catch (error) {
        console.log(error);
        throw 'Cannot load now playing movies';
    }

};