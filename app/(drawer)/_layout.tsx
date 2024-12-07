import CustomDrawer from '@/components/shared/CustomDrawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
	return (
		<Drawer
		drawerContent={CustomDrawer}
		screenOptions={{
			// headerShown: false,
			overlayColor: "rgba(0,0,0,0.4)",
			drawerActiveTintColor: "indigo",
			headerShadowVisible: false,
			sceneStyle: { backgroundColor: "white" },
		}}
		>
			<Drawer.Screen
				name="(tabs)" // This is the name of the page and must match the url from root
				options={{
					headerShown: false,
					drawerItemStyle: { borderRadius: 10 },
					drawerLabel: "Tabs",
					title: "Tabs",
					drawerIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="diamond-outline" color={color} size={size} />
					)
				}}
			/>
			<Drawer.Screen
				name="user/index" // This is the name of the page and must match the url from root
				options={{
					drawerItemStyle: { borderRadius: 10 },
					drawerLabel: "User",
					title: "User",
					drawerIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="account" color={color} size={size} />
					)
				}}
			/>
			<Drawer.Screen
				name="schedule/index" // This is the name of the page and must match the url from root
				options={{
					drawerLabel: "Schedule",
					title: "Schedule",
					drawerIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="calendar" color={color} size={size} />
					)
				}}
			/>
		</Drawer>
	);
};

export default DrawerLayout;
