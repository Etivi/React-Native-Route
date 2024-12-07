import { Image, Pressable, Text, View } from "react-native";

interface Props {
	id: number;
	poster: string;
	smallPoster?: boolean;
    classname?: string
}

const MoviesPoster = ({ id, poster, smallPoster = false, classname }: Props) => {
	return (
		<Pressable
            className={`active:opacity-80 ${classname}`}
            >
			<Image
				source={{ uri: poster }}
				style={{ 
                    width: smallPoster ? 85 : 150, 
                    height: smallPoster ? 130 : 250 
                }}
                className="w-full h-full shadow-lg rounded-2xl"
                key={id}
                resizeMode="cover"
			/>
		</Pressable>
	);
};

export default MoviesPoster;
