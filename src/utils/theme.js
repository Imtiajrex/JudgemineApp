import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const theme = {
	BIGFONT: 30,
	NORMALFONT: 21,
	SMALLFONT: 17,
	SPACING: 15,
	SCREEN_WIDTH: width,
	SCREEN_HEIGHT: height,
	BACKGROUND: "#D8E3E7",
	DEFAULT: "#51C4D3",
	SECONDARY: "#126E82",
	PRIMARY: "#132C33",
};
export default theme;
// import {
// 	SCREEN_WIDTH,
// 	SCREEN_HEIGHT,
// 	BACKGROUND,
// 	DEFAULT,
// 	PRIMARY,
// 	SECONDARY,
// 	SPACING,
// 	BIGFONT,
// 	SMALLFONT,
// 	NORMALFONT,
// } from "../utils/theme";
