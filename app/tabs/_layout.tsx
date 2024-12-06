import { Platform } from "react-native";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import * as NavigationBar from "expo-navigation-bar";

const isAndroid = Platform.OS === "android";

if (isAndroid) {
	NavigationBar.setBackgroundColorAsync("transparent");
}

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{ tabBarActiveTintColor: "purple", headerShown: false }}
		>
			<Tabs.Screen
				name="(stack)"
				options={{
					title: "Profile",
					tabBarIcon: ({ color }) => (
						<FontAwesome size={28} name="user" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="home/index"
				options={{
					title: "Home Screen",
					tabBarIcon: ({ color }) => (
						<FontAwesome size={28} name="home" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="favorites/index"
				options={{
					title: "Favorites",
					tabBarIcon: ({ color }) => (
						<FontAwesome size={28} name="heart" color={color} />
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
