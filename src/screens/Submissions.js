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
		problemName: "Reserve Airplane Mode",
		serial: "150",
		name: "imtiajrex",
		right: true,
		date: "23-04-2020",
		time: "08:00pm",
	},
	{
		problemName: "Reserve Airplane Mode",
		serial: "149",
		name: "rogersmith",
		right: false,
		date: "23-04-2020",
		time: "08:00pm",
	},
	{
		problemName: "Accelerometer",
		serial: "148",
		name: "imtiajrex",
		right: false,
		date: "23-04-2020",
		time: "08:00pm",
	},
	{
		problemName: "Race Car Speed?",
		serial: "147",
		name: "newtonq",
		right: true,
		date: "23-04-2020",
		time: "08:00pm",
	},
];
export default function Submissions() {
	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<View style={styles.person}>
					<View style={[styles.titleView, { padding: 0 }]}>
						<Text style={styles.title}>Submissions</Text>
					</View>
					<FlatList
						data={data}
						keyExtractor={(_, idx) => idx.toString()}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={styles.personView}
						renderItem={({ item, index }) => (
							<View
								style={[
									styles.personItem,
									{ backgroundColor: item.right ? "#2daabe" : "#de343f" },
								]}
							>
								<Text style={styles.index}>#{item.serial}</Text>
								<Text style={styles.problemName}>{item.problemName}</Text>
								<View
									style={{
										justifyContent: "space-between",
										marginTop: 10,
									}}
								>
									<Text style={styles.personTitle}>
										<FontAwesome5 name="user" color={"#dbdbdb"} size={18} />{" "}
										{item.name}
									</Text>
									<Text style={styles.personTitle}>
										<FontAwesome5 name="calendar" color={"#dbdbdb"} size={18} />{" "}
										{item.date}
									</Text>
									<Text style={styles.personTitle}>
										<FontAwesome5 name="clock" color={"#dbdbdb"} size={18} />{" "}
										{item.time}
									</Text>
								</View>
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
		color: "#212121",
		fontSize: theme.SMALLFONT,
		fontWeight: "bold",
		top: 5,
		left: 5,
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
	},
	personTitle: {
		fontSize: theme.SMALLFONT,
		color: "#dbdbdb",
		backgroundColor: "#212121",
		textAlign: "center",
		padding: 10,
		marginTop: 10,
		borderRadius: 10,
	},
	problemName: {
		fontSize: theme.NORMALFONT,
		color: "black",
		textAlign: "center",
	},
});
