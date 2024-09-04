import { Stack } from "expo-router";

export default function PublicLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="WelcomeScreen"
		>
			<Stack.Screen name="WelcomeScreen" />
			<Stack.Screen name="LoginScreen" />
			<Stack.Screen name="RegisterScreen"/>
		</Stack>
	);
}