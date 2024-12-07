import { ActivityIndicator, View } from "react-native";

const CustomLoading = () => {
	return (
		<View className="items-center justify-center flex-1">
			<ActivityIndicator size="large" color="indigo" />
		</View>
	);
};

export default CustomLoading;
