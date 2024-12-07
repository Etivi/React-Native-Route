import { nowPlayingMoviesAction } from "@/core/actions/movies/now-playing.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
	// Queries
	const nowPlayingQuery = useQuery({
		queryKey: ["movies", "nowPlaying"],
		queryFn: nowPlayingMoviesAction,
        staleTime: 24 * 60 * 60 * 1000, // 24 horas
	});

	const popularQuery = useQuery({
		queryKey: ["movies", "popular"],
		queryFn: nowPlayingMoviesAction,
        staleTime: 24 * 60 * 60 * 1000, // 24 horas
	});

	const topRatedQuery = useQuery({
		queryKey: ["movies", "top-rated"],
		queryFn: nowPlayingMoviesAction,
        staleTime: 24 * 60 * 60 * 1000, // 24 horas
	});

	const upcomingQuery = useQuery({
		queryKey: ["movies", "upcoming"],
		queryFn: nowPlayingMoviesAction,
        staleTime: 24 * 60 * 60 * 1000, // 24 horas
	});

	return {
		nowPlayingQuery,
		popularQuery,
		topRatedQuery,
		upcomingQuery
	};
};
