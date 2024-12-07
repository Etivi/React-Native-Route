import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

const ProductScreen = () => {

	const navigation = useNavigation();

	const { id } = useLocalSearchParams();

	const product = products.find((product) => product.id === id);

	useEffect(() => {
		navigation.setOptions({
			headerTitle: product?.title,
		})
	}, [product]);

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
