import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CommonActions, DrawerActions, StackActions, useNavigation } from "@react-navigation/native";
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
			<Stack.Screen name="home/index" options={{ title: "Inicio" }} />
			<Stack.Screen name="profile/index" options={{ title: "Perfil" }} />
			<Stack.Screen name="products/index" options={{ title: "Productos" }} />
			<Stack.Screen name="settings/index" options={{ title: "Ajustes" }} />
		</Stack>
	);
};

export default StackLayout;
