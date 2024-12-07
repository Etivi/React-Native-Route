import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { router, Stack } from "expo-router";


const StackLayout = () => {
	const navigation = useNavigation();

	const onToogleDrawerClick = (canGoBack?: boolean) => {
		if (canGoBack) {
			router.back();
			return;
		}

		navigation.dispatch(DrawerActions.toggleDrawer());
	};

	return (
		<Stack
			screenOptions={{
				// headerShown: false,
				headerLeft: ({ canGoBack, tintColor }) => (
					<MaterialCommunityIcons
						onPress={() => onToogleDrawerClick(canGoBack)}
						size={24}
						name={canGoBack ? "arrow-left" : "menu"}
						color={tintColor}
					/>
				),
				headerShadowVisible: false,
				contentStyle: { backgroundColor: "white" },
				headerTitleAlign: "center",
				animation: "ios_from_left",
			}}
		>
			<Stack.Screen name="movies/index" options={{ title: "Movies" }} />
		</Stack>
	);
};

export default StackLayout;
