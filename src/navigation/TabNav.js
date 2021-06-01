import React from "react";
import { View, StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TouchableScale from "react-native-touchable-scale";
import theme from "../utils/theme";
import { FontAwesome5 } from "@expo/vector-icons";
import Problems from "../screens/Problems";
import Contests from "../screens/Contests";
import Leaderboard from "../screens/LeaderBoard";
import Submissions from "../screens/Submissions";
import User from "../screens/User";
const menu = {
	Problems: "brain",
	Contests: "crown",
	Leaderboard: "chart-line",
	Submissions: "clipboard-check",
	User: "user-astronaut",
};

const Tab = createBottomTabNavigator();
function MyTabBar({ state, descriptors, navigation }) {
	const focusedOptions = descriptors[state.routes[state.index].key].options;

	if (focusedOptions.tabBarVisible === false) {
		return null;
	}

	return (
		<View style={styles.wrapper}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				return (
					<TouchableScale
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						key={index}
						onLongPress={onLongPress}
						style={{
							...styles.menu,
							backgroundColor: isFocused ? theme.SECONDARY : theme.BACKGROUND,
						}}
					>
						<FontAwesome5
							name={menu[label]}
							size={20}
							color={isFocused ? theme.BACKGROUND : theme.SECONDARY}
						/>
					</TouchableScale>
				);
			})}
		</View>
	);
}

export default function TabNav() {
	return (
		<Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
			<Tab.Screen name="Problems" component={Problems} />
			<Tab.Screen name="Contests" component={Contests} />
			<Tab.Screen name="Leaderboard" component={Leaderboard} />
			<Tab.Screen name="Submissions" component={Submissions} />
			<Tab.Screen name="User" component={User} />
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		// position: "absolute",
		// bottom: 0,
		// left: 0,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
		width: theme.SCREEN_WIDTH,

		padding: theme.SPACING,
		// paddingTop: theme.SPACING * 2,
		backgroundColor: theme.BACKGROUND,
	},
	menu: {
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		width: theme.SCREEN_WIDTH * 0.1,
		height: theme.SCREEN_WIDTH * 0.1,
	},
});
