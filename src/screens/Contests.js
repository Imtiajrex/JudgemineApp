import { useRoute } from "@react-navigation/core";
import React from "react";
import { useContext } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableWithoutFeedback,
} from "react-native";
import theme from "../utils/theme";
import { FontAwesome5 } from "@expo/vector-icons";
import TouchableScale from "react-native-touchable-scale";
import { FlatList } from "react-native-gesture-handler";
const data = [
	{
		name: "Alpha Division Contest",
		date: "23-04-2021",
		participants: 450,
		time: "8:00pm - 10:30pm",
	},
	{
		name: "Beta Division Contest",
		date: "27-04-2021",
		participants: 200,
		time: "1:00pm - 2:30pm",
	},
	{
		name: "Beta Division Contest",
		date: "27-04-2021",
		participants: 200,
		time: "1:00pm - 2:30pm",
	},
	{
		name: "Beta Division Contest",
		date: "27-04-2021",
		participants: 200,
		time: "1:00pm - 2:30pm",
	},
	{
		name: "Beta Division Contest",
		date: "27-04-2021",
		participants: 200,
		time: "1:00pm - 2:30pm",
	},
];
export default function Contests() {
	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<View style={styles.upcomingBlock}>
					<View style={styles.titleView}>
						<Text style={styles.title}>Upcoming Contests</Text>
					</View>
					<FlatList
						data={data}
						keyExtractor={(_, idx) => idx.toString()}
						horizontal
						showsHorizontalScrollIndicator={false}
						decelerationRate={"fast"}
						snapToInterval={320}
						contentContainerStyle={styles.upcomingView}
						renderItem={({ item, index }) => (
							<TouchableWithoutFeedback style={styles.upcoming}>
								<View style={styles.upcoming}>
									<Text style={styles.upcomingTitle}>{item.name}</Text>
									<View style={styles.info}>
										<FontAwesome5
											name="calendar-alt"
											size={25}
											style={styles.infoIcon}
											color={theme.SECONDARY}
										/>
										<Text style={styles.infoText}>{item.date}</Text>
									</View>
									<View style={styles.info}>
										<FontAwesome5
											name="clock"
											size={25}
											style={styles.infoIcon}
											color={theme.SECONDARY}
										/>
										<Text style={styles.infoText}>{item.time}</Text>
									</View>
									<View style={styles.info}>
										<FontAwesome5
											name="user-friends"
											size={25}
											style={styles.infoIcon}
											color={theme.SECONDARY}
										/>
										<Text style={styles.infoText}>{item.participants}</Text>
									</View>
								</View>
							</TouchableWithoutFeedback>
						)}
					/>
				</View>
				<View style={styles.past}>
					<View style={[styles.titleView, { padding: 0 }]}>
						<Text style={styles.title}>Past Contests</Text>
					</View>
					<FlatList
						data={data}
						keyExtractor={(_, idx) => idx.toString()}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={styles.pastView}
						renderItem={({ item, index }) => (
							<View style={styles.pastItem}>
								<Text style={styles.pastTitle}>{item.name}</Text>
								<View style={styles.pastInfos}>
									<View style={styles.pastInfo}>
										<FontAwesome5
											name="calendar-alt"
											size={25}
											style={styles.pastInfoIcon}
											color={theme.SECONDARY}
										/>
										<Text style={styles.pastInfoText}>{item.date}</Text>
									</View>
									<View style={styles.pastInfo}>
										<FontAwesome5
											name="user-friends"
											size={25}
											style={styles.pastInfoIcon}
											color={theme.SECONDARY}
										/>
										<Text style={styles.pastInfoText}>{item.participants}</Text>
									</View>
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
		backgroundColor: theme.PRIMARY,
		paddingTop: theme.SPACING * 3,
		overflow: "hidden",
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 20,
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
	upcomingView: {
		// width: "100%",
		padding: theme.SPACING,
	},
	upcoming: {
		width: 300,
		height: 200,
		borderRadius: 20,
		padding: theme.SPACING,
		backgroundColor: theme.SECONDARY,
		justifyContent: "space-between",
		elevation: 5,
		marginHorizontal: theme.SPACING,
	},
	upcomingTitle: {
		fontSize: theme.NORMALFONT,
		fontWeight: "700",
		color: theme.PRIMARY,
		textAlign: "center",
	},
	info: {
		flexDirection: "row",
		marginTop: 5,
		padding: 10,
		backgroundColor: theme.PRIMARY,
		borderRadius: 20,
		position: "relative",
		justifyContent: "center",
	},
	infoIcon: {
		position: "absolute",
		top: "40%",
		left: 10,
	},
	infoText: {
		fontSize: theme.SMALLFONT,
		color: theme.SECONDARY,
	},
	upcomingBlock: {
		flex: 0.8,
	},
	past: {
		flex: 1,
		borderRadius: 20,
		overflow: "hidden",
		paddingTop: 5,
		width: theme.SCREEN_WIDTH - theme.SPACING * 2,
	},
	pastView: {
		paddingBottom: 100,
	},
	pastItem: {
		width: "100%",
		padding: theme.SPACING,
		justifyContent: "space-between",
		borderRadius: 15,
		elevation: 20,
		backgroundColor: theme.BACKGROUND,
		marginVertical: 10,
	},
	pastTitle: {
		fontSize: theme.NORMALFONT,
		fontWeight: "700",
		color: theme.PRIMARY,
	},
	pastInfos: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	pastInfo: {
		flexDirection: "row",
		marginTop: 5,
		padding: 10,
		borderRadius: 20,
		position: "relative",
	},
	pastInfoIcon: {},
	pastInfoText: {
		fontSize: theme.SMALLFONT,
		color: theme.SECONDARY,
		marginLeft: 10,
	},
});
