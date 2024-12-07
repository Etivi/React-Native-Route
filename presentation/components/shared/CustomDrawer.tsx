import {
	DrawerContentComponentProps,
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";

const CustomDrawer = (props: DrawerContentComponentProps) => {
	return (
		<DrawerContentScrollView {...props} scrollEnabled={false}>
			<View className="flex justify-center items-center mx-3 mb-5 h-[150px] rounded-xl bg-primary">
				<View className="flex items-center justify-center w-24 h-24 p-2 bg-white rounded-full">
					<Image
						resizeMode="contain"
						className="rounded-full bg-primary"
						source={require("../../../assets/images/react-logo.png")}
						style={{ width: 60, height: 60 }}
					/>
				</View>
			</View>
			<View className="mx-3">
				<DrawerItemList {...props} />
			</View>
		</DrawerContentScrollView>
	);
};

export default CustomDrawer;
