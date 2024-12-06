import React from "react";
import { Pressable, PressableProps, Text, View } from "react-native";

interface Props extends PressableProps {
	children: string;
	color?:
		| "primary"
		| "secondary"
		| "secondary-100"
		| "secondary-200"
		| "tertiary";
	variant?: "text-only" | "contained";
	className?: string;
}

const CustomButton = React.forwardRef(
	(
		{
			children,
			color = "primary",
			onPress,
			variant = "contained",
			className,
		}: Props,
		ref: React.Ref<View>
	) => {
		const btnColor = {
			primary: "bg-primary",
			secondary: "bg-secondary",
			"secondary-100": "bg-secondary-100",
			"secondary-200": "bg-secondary-200",
			tertiary: "bg-tertiary",
		}[color];

		const textColor = {
			primary: "text-primary",
			secondary: "text-secondary",
			"secondary-100": "text-secondary-100",
			"secondary-200": "text-secondary-200",
			tertiary: "text-tertiary",
		}[color];

		if (variant === "text-only") {
			return (
				<Pressable className={`px-4 py-2 ${className}`} onPress={onPress}>
					<Text className={`text-center ${textColor}`}>{children}</Text>
				</Pressable>
			);
		}

		return (
			<Pressable
				className={`px-4 py-2 rounded-md ${btnColor} active:opacity-80 ${className}`}
				onPress={onPress}
				ref={ref}
			>
				<Text className="text-center text-white">{children}</Text>
			</Pressable>
		);
	}
);

export default CustomButton;
