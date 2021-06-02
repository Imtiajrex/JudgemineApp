import { useRoute } from "@react-navigation/core";
import React from "react";
import { useContext } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import theme from "../utils/theme";
import { FontAwesome5 } from "@expo/vector-icons";
import TouchableScale from "react-native-touchable-scale";
import { FlatList } from "react-native-gesture-handler";
const data = [
	{
		name: "imtiajrex",
		score: "150",
	},
	{
		name: "rogersmith",
		score: "120",
	},
	{
		name: "newtonq",
		score: "110",
	},
	{
		name: "einstoei",
		score: "100",
	},
	{
		name: "romaniq",
		score: "90",
	},
	{
		name: "suodma",
		score: "85",
	},
	{
		name: "gitish",
		score: "80",
	},
];
export default function LeaderBoard() {
	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<View style={styles.person}>
					<View style={[styles.titleView, { padding: 0 }]}>
						<Text style={styles.title}>Leaderboard</Text>
					</View>
					<FlatList
						data={data}
						keyExtractor={(_, idx) => idx.toString()}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={styles.personView}
						renderItem={({ item, index }) => (
							<View style={styles.personItem}>
								<Text style={styles.index}>#{index + 1}</Text>
								<Text style={styles.personTitle}>{item.name}</Text>
								<Text style={styles.personScore}>Score: {item.score}</Text>
							</View>
						)}
					/>
				</View>
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
		borderBottomLeftRadius: 45,
		borderBottomRightRadius: 45,
		backgroundColor: theme.PRIMARY,
		paddingTop: theme.SPACING * 3,
		overflow: "hidden",
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 40,
	},
	titleView: {
		width: "100%",
		padding: theme.SPACING,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 0,
	},
	title: {
		fontSize: theme.NORMALFONT,
		color: theme.BACKGROUND,
		fontWeight: "700",
	},
	index: {
		position: "absolute",
		color: theme.SECONDARY,
		fontSize: theme.NORMALFONT,
		fontWeight: "bold",
		top: "50%",
		left: theme.SPACING,
	},
	person: {
		flex: 1,
		borderRadius: 20,
		overflow: "hidden",
		paddingTop: 5,
		width: theme.SCREEN_WIDTH - theme.SPACING * 2,
	},
	personView: {
		paddingBottom: 100,
	},
	personItem: {
		width: "100%",
		padding: theme.SPACING,
		justifyContent: "center",
		borderRadius: 15,
		elevation: 20,
		backgroundColor: theme.BACKGROUND,
		marginVertical: theme.SPACING * 1.5,
		paddingHorizontal: theme.SPACING * 2,
	},
	personTitle: {
		fontSize: theme.NORMALFONT,
		color: theme.PRIMARY,
		textAlign: "center",
	},
	personScore: {
		position: "absolute",
		top: "60%",
		right: theme.SPACING,
		fontSize: theme.SMALLFONT,
		color: theme.SECONDARY,
		textAlign: "center",
	},
});
