import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { useRef } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviesPoster from "./MoviesPoster";

interface Props {
	movies: Movie[];
}

const MainSlideShow = ({ movies }: Props) => {
	const width = useWindowDimensions().width;

	const ref = useRef<ICarouselInstance>(null);

	return (
		<View className="h-[250px] w-full">
			<Carousel
				ref={ref}
				width={200}
				height={350}
				data={movies}
				renderItem={({ item }) => (
					<MoviesPoster id={item.id} poster={item.poster} />
				)}
				style={{
					width: width,
					height: 350,
					justifyContent: "center",
					alignItems: "center",
				}}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                defaultIndex={1}
			/>
		</View>
	);
};

export default MainSlideShow;
