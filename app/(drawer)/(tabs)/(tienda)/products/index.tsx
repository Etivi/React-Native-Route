import { products } from "@/store/products.store";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";

const ProductsScreen = () => {
	return (
		<View className="flex flex-1 px-4">
			<FlatList
				data={products}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<View className="mt-2">
						<Text className="text-2xl font-work-black">{item.title}</Text>
						<Text>{item.description}</Text>

						<View className="flex flex-row items-center justify-between my-2">
							<Text className="text-lg font-work-black text-secondary-200">
								Precio: ${item.price}
							</Text>
							<Link
								href={{ pathname: '/products/[id]', params: { id: item.id } }}
								className="text-primary font-work-medium"
							>
								Ver detalles
							</Link>
						</View>
					</View>
				)}
			/>
		</View>
	);
};

export default ProductsScreen;
