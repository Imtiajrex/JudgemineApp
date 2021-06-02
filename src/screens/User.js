import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import theme from "../utils/theme";
import { FontAwesome5 } from "@expo/vector-icons";
export default function User() {
	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<View style={styles.profileImg}>
					<FontAwesome5 name="user" size={50} color={"white"} />
				</View>
				<View style={styles.details}>
					<Text style={styles.name}>Imtiaj Bin Aoual</Text>
					<Text style={styles.username}>@imtiajrex</Text>
					<Text style={styles.description}>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form,
					</Text>
				</View>
				<View style={styles.infos}>
					<View style={[styles.info, { backgroundColor: "#f0a502" }]}>
						<Text style={[styles.label]}>Rank</Text>
						<Text style={styles.value}>#20</Text>
					</View>
					<View style={[styles.info, { backgroundColor: "#eb6639" }]}>
						<Text style={[styles.label]}>Score</Text>
						<Text style={[styles.value]}>152</Text>
					</View>
					<View style={[styles.info, { backgroundColor: "#d4456e" }]}>
						<Text style={[styles.label]}>Solved</Text>
						<Text style={[styles.value]}>152</Text>
					</View>
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
		borderBottomRightRadius: 45,
		backgroundColor: theme.PRIMARY,
		paddingTop: theme.SPACING * 4,
		alignItems: "center",
	},
	profileImg: {
		width: 150,
		height: 150,
		borderRadius: 75,
		backgroundColor: "#050d0f",
		justifyContent: "center",
		alignItems: "center",
	},

	details: {
		justifyContent: "center",
		alignItems: "center",
	},
	name: {
		marginTop: 5,
		fontSize: theme.NORMALFONT,
		color: theme.BACKGROUND,
		fontWeight: "800",
	},
	username: {
		marginTop: 10,
		fontSize: theme.SMALLFONT,
		color: theme.DEFAULT,
	},
	description: {
		marginTop: 10,
		fontSize: theme.SMALLFONT,
		color: theme.SECONDARY,
		textAlign: "center",
		fontWeight: "100",
		padding: theme.SPACING,
		height: 120,
	},
	infos: {
		marginTop: 20,
		flexDirection: "row",
	},
	info: {
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: "#050d0f",
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
	},
	label: {
		fontSize: theme.SMALLFONT,
		color: "white",
	},
	value: {
		marginTop: 5,
		fontSize: theme.SMALLFONT,
		color: "white",
	},
});
