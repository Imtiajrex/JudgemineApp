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
		title: "Reserve Airplane Mode",
		description:
			"An airplane accelerates down a runway at 3.20 m/s2 for 32.8 s until is finally lifts off the ground. Determine the distance traveled before takeoff.",
		constraints: "Answer must be upto 3 digits",
	},
	{
		title: "Accelerometer",
		description:
			"A car starts from rest and accelerates uniformly over a time of 5.21 seconds for a distance of 110 m. Determine the acceleration of the car.",
		constraints: "Answer must be upto 3 digits",
	},
	{
		title: "The Upton Chuck Problem",
		description:
			"Upton Chuck is riding the Giant Drop at Great America. If Upton free falls for 2.60 seconds, what will be his final velocity and how far will he fall?",
		constraints: "Answer must be upto 5 digits",
	},
	{
		title: "Race Car Speed?",
		description:
			"A race car accelerates uniformly from 18.5 m/s to 46.1 m/s in 2.47 seconds. Determine the acceleration of the car and the distance traveled.",
		constraints: "Answer must be upto 3 digits",
	},
];
export default function Problems() {
	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<View style={styles.titleView}>
					<Text style={styles.title}>Problems</Text>
					<TouchableScale>
						<FontAwesome5 name="filter" size={25} color={theme.BACKGROUND} />
					</TouchableScale>
				</View>
				<FlatList
					data={data}
					keyExtractor={(_, idx) => idx.toString()}
					horizontal
					showsHorizontalScrollIndicator={false}
					decelerationRate={"fast"}
					snapToInterval={theme.SCREEN_WIDTH}
					renderItem={({ item, index }) => (
						<View style={styles.itemView}>
							<View style={styles.item}>
								<Text style={styles.itemTitle}>{item.title}</Text>
								<Text style={styles.description}>{item.description}</Text>
								<Text style={styles.constraints}>{item.constraints}</Text>
								<TextInput
									placeholder="Answer Here..."
									style={styles.answer}
									placeholderTextColor={theme.SECONDARY}
								/>
								<TouchableScale style={styles.submit}>
									<FontAwesome5
										name="location-arrow"
										size={25}
										color={theme.PRIMARY}
									/>
								</TouchableScale>
							</View>
						</View>
					)}
				/>
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
		backgroundColor: theme.PRIMARY,
		paddingTop: theme.SPACING * 3,
	},
	titleView: {
		width: "100%",
		padding: theme.SPACING * 2,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 0,
	},
	title: {
		fontSize: theme.NORMALFONT,
		color: theme.BACKGROUND,
		fontWeight: "700",
	},
	itemView: {
		width: theme.SCREEN_WIDTH,
		justifyContent: "center",
		alignItems: "center",
		marginTop: -theme.SPACING,
	},
	item: {
		width: theme.SCREEN_WIDTH - theme.SPACING * 4,
		height: theme.SCREEN_WIDTH * 1.3,
		padding: theme.SPACING * 1.3,
		backgroundColor: theme.DEFAULT,
		borderRadius: 45,
		justifyContent: "center",
		alignItems: "center",
	},
	itemTitle: {
		color: theme.PRIMARY,
		fontSize: theme.NORMALFONT,
		fontWeight: "bold",
		marginTop: theme.SPACING,
	},
	description: {
		marginTop: theme.SPACING,
		height: "50%",
		fontSize: theme.SMALLFONT,
		width: "100%",
		color: theme.PRIMARY,
		lineHeight: 25,
		textAlign: "center",
	},
	constraints: {
		color: theme.SECONDARY,
		fontSize: theme.SMALLFONT,
		width: "100%",
		textAlign: "center",
	},
	answer: {
		color: theme.SECONDARY,
		fontSize: theme.SMALLFONT,
		width: "100%",
		textAlign: "center",
		marginTop: theme.SPACING,
		padding: theme.SPACING,
		borderRadius: 20,
		backgroundColor: theme.PRIMARY,
		color: theme.DEFAULT,
	},
	submit: {
		padding: theme.SPACING,
		marginTop: theme.SPACING,
		paddingVertical: theme.SPACING * 0.5,
		borderRadius: 20,
		backgroundColor: "#4AE09E",
		justifyContent: "center",
		alignItems: "center",
		width: "70%",
		elevation: 4,
	},
});
