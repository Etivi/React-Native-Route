import { Slot, SplashScreen } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useFonts } from "expo-font";

import "./global.css";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient()

const RootLayout = () => {
	const [fontsLoaded, error] = useFonts({
		"WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
		"WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
		"WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
	});

	useEffect(() => {
		if (error) throw error;
		if (fontsLoaded) SplashScreen.hideAsync();
	}, [fontsLoaded, error]);

	if (!fontsLoaded && !error) return null;

	return (
		<QueryClientProvider client={queryClient}>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<Slot />
			</GestureHandlerRootView>
		</QueryClientProvider>
	);
};

export default RootLayout;
