
import CustomButton from "@/presentation/components/shared/CustomButton";
import { Link, router, } from "expo-router";
import { View } from "react-native";

const HomeScreen = () => {


	return (
		<View className="flex flex-col gap-2 px-4 pt-4">
			<CustomButton
				children="Products"
				onPress={() => {
					router.push("/products");
				}}
				color="secondary-200"
			/>
			<CustomButton
				children="Profile"
				onPress={() => {
					router.push("/profile");
				}}
				color="secondary-100"
			/>

			<CustomButton
				children="Settings"
				onPress={() => {
					router.push("/settings");
				}}
				color="primary"
			/>

			<Link href="/profile" asChild>
				<CustomButton children="Profile" variant="text-only" />
			</Link>
		</View>
	);
};

export default HomeScreen;
