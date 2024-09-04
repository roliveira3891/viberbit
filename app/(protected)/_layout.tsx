import { Tabs } from "expo-router";
import React from "react";
import { COLORS } from "../constants/theme";
import { View, Text, Platform } from "react-native";
import icons from "../constants/icons";
import { Image } from "expo-image";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function ProtectedLayout() {
	return (

		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					display: "flex",
					position: "absolute",
					bottom: 0,
					right: 0,
					left: 0,
					height: 0,
					elevation: 0,
					backgroundColor: COLORS.white
				},
				tabBarShowLabel: false,
			}}
			initialRouteName="HomeScreen"
		>
			<Tabs.Screen
				name="HomeScreen"
				options={{
					title: '',
					tabBarIcon: ({ focused }: { focused: boolean }) => {
						return (
							<View style={{
								alignItems: "center",
								padding: 16,
								borderTopColor: focused ? COLORS.primary : COLORS.white,
								borderTopWidth: 2
							}}>
								 <Ionicons 
								 	name={focused ? "home" :"home-outline" } 
									size={32} color="green"
									tintColor={focused ? COLORS.primary : COLORS.white }
									
								/>
								
								<Text style={{
									fontSize: 14,
									color: focused ? COLORS.primary : COLORS.white
								}}>Home</Text>
							</View>
						)
					}
				}}
			/>

			<Tabs.Screen
				name="SettingsScreen"
				options={{
					title: '',
					tabBarIcon: ({ focused }: { focused: boolean }) => {
						return (
							<View style={{
								alignItems: "center",
								padding: 16,
								borderTopColor: focused ? COLORS.primary : COLORS.white,
								borderTopWidth: 2
							}}>
								<Image
									source={focused ? icons.icon : icons.icon}
									contentFit="contain"
									style={{
										height: 24,
										width: 24,
										tintColor: focused ? COLORS.primary : COLORS.white
									}}
								/>
								<Text style={{
									fontSize: 14,
									color: focused ? COLORS.primary : COLORS.white
								}}>Settings</Text>
							</View>
						)
					}
				}}
			/>
		</Tabs>
	);
}