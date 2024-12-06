import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import { Text, View } from "react-native";

const HomeScreen = () => {
	return (
		<View className="flex flex-col gap-2 px-4 pt-4">
			<CustomButton
				children="Products"
				onPress={() => {
					router.push("/tabs/(stack)/products");
				}}
				color="secondary-200"
			/>
			<CustomButton
				children="Profile"
				onPress={() => {
					router.push("/tabs/(stack)/profile");
				}}
				color="secondary-100"
			/>

			<CustomButton
				children="Settings"
				onPress={() => {
					router.push("/tabs/(stack)/settings");
				}}
				color="primary"
			/>

			<Link href="/tabs/(stack)/profile" asChild>
				<CustomButton children="Profile" variant="text-only" />
			</Link>
		</View>
	);
};

export default HomeScreen;
