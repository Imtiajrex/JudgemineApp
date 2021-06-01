import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import TabNav from "../navigation/TabNav";
import SharedNav from "../navigation/SharedNav";

const Stack = createSharedElementStackNavigator();
export default function RootNav() {
	return (
		<Stack.Navigator initialRouteName="Main" headerMode="none">
			<Stack.Screen name="Main" component={TabNav} />
			<Stack.Screen name="Shared" component={SharedNav} />
		</Stack.Navigator>
	);
}
