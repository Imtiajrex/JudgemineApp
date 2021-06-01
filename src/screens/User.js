import { useRoute } from "@react-navigation/core";
import React from "react";
import { useContext } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import theme from "../utils/theme";
import { FontAwesome5 } from "@expo/vector-icons";
import TouchableScale from "react-native-touchable-scale";
import { FlatList } from "react-native-gesture-handler";
export default function User() {
	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<Text>User</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.BACKGROUND,
	},
	wrapper: {
		flex: 1,
		borderBottomRightRadius: 45,
		backgroundColor: theme.PRIMARY,
		paddingTop: theme.SPACING * 3,
	},
});
