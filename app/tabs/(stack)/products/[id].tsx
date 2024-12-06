import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const ProductScreen = () => {

	const { id } = useLocalSearchParams();

	const product = products.find((product) => product.id === id);

	if (!product) return Redirect({ href: "/" });

	return (
		<View className="gap-2 px-5 mt-10">
			<Text className="text-2xl font-work-black">{product.title}</Text>
			<Text className="text-lg font-work-light">{product.description}</Text>
			<Text className="text-lg font-work-medium color-secondary-200">Precio: ${product.price}</Text>
		</View>
	);
};

export default ProductScreen;
