import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import RootNav from "./src/navigation/RootNav";
import theme from "./src/utils/theme";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar hidden />
			<NavigationContainer>
				<RootNav />
			</NavigationContainer>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.BACKGROUND,
		// marginTop: StatusBar.currentHeight,
	},
});
