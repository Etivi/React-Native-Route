import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import { Text, View } from "react-native";

const HomeScreen = () => {

	const navigation = useNavigation()

	const onToogleDrawer = () => {
		navigation.dispatch(DrawerActions.toggleDrawer())
	}

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

			<CustomButton onPress={onToogleDrawer}>Abrir Menu</CustomButton>
		</View>
	);
};

export default HomeScreen;
