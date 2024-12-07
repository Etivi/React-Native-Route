import MainSlideShow from "@/presentation/components/movies/MainSlideShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import CustomLoading from "@/presentation/components/shared/CustomLoading";
import { useMovies } from "@/presentation/hooks/useMovies";
import { Text, View, ScrollView } from "react-native";

const MovieScreen = () => {
	const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
		useMovies();

	if (nowPlayingQuery.isLoading) return <CustomLoading />;

	return (
		<ScrollView>
			<View className="mb-10">
				<Text className="px-2 text-2xl font-work-medium">Movies App</Text>

				{/* Carrousel */}
				<MainSlideShow movies={nowPlayingQuery.data ?? []} />

				{/* Peliculas populares */}
				<MovieHorizontalList
					title="Populares"
					movies={popularQuery.data ?? []}
				/>

				{/* Peliculas top */}
				<MovieHorizontalList
					title="Top"
					movies={topRatedQuery.data ?? []}
				/>

				{/* Peliculas proximamente */}
				<MovieHorizontalList
					title="Proximamente"
					movies={upcomingQuery.data ?? []}
				/>
			</View>
		</ScrollView>
	);
};

export default MovieScreen;
