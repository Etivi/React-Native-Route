import { Platform } from "react-native";
import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as NavigationBar from "expo-navigation-bar";

const isAndroid = Platform.OS === "android";

if (isAndroid) {
	NavigationBar.setBackgroundColorAsync("transparent");
}

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{ 
				tabBarActiveTintColor: "purple", 
				// headerShown: false 
			}}
		>
			<Tabs.Screen
				name="(movies)"
				options={{
					headerShown: false,
					title: "Home Screen",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons size={28} name="movie-outline" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="favorites/index"
				options={{
					title: "Favorites",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons size={28} name="heart" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="(tienda)"
				options={{
					headerShown: false,
					title: "Tienda",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons size={28} name="account-plus-outline" color={color} />
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
