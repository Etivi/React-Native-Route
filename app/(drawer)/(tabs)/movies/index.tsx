import { nowPlayingMoviesAction } from "@/core/actions/movies/now-playing.action";
import { Text, View } from "react-native";

const MovieScreen = () => {
	nowPlayingMoviesAction();

	return (
		<View>
			<Text>Movie Screen</Text>
		</View>
	);
};

export default MovieScreen;
