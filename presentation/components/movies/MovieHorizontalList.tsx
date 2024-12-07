import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { FlatList, Text, View } from "react-native";
import MoviesPoster from "./MoviesPoster";

interface Props {
	movies: Movie[],
	title?: string
}

const MovieHorizontalList = ({ movies, title }: Props) => {
	return (
		<View>
			{title && <Text className="p-2 text-2xl font-work-medium">{title}</Text>}

			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={movies}
				renderItem={({ item }) => <MoviesPoster id={item.id} poster={item.poster} smallPoster classname="px-2"/>}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
};

export default MovieHorizontalList;
