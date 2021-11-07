import React, { useState } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from "react-native";

const UIRadio = ({ items = [], selectedKey = null, itemValue = 'key', itemLabel = 'label', onChange }) => {
	const [val, setVal] = useState(selectedKey);

	const handlerPress = (key) => {
		if (key !== val) {
			setVal(key);
			onChange(key);
		}
	};

	return (
		<View>
			{items.map(item =>
				<View key={item[itemValue]} style={styles.radioItem}>
					<TouchableHighlight style={styles.radioCircle} onPress={() => handlerPress(item[itemValue])}>
						<>
							{ val === item[itemValue] && <View style={styles.radioSelectedCircle} /> }
						</>
					</TouchableHighlight>
					<Text style={styles.radioText}>{item[itemLabel]}</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	radioItem: {
		marginBottom: 10,
		alignContent: 'center',
		flexDirection: 'row',
	},
	radioCircle: {
		height: 20,
		width: 20,
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: '#0DAFB9',
		borderRadius: 50,
		marginRight: 18,
	},
	radioText: {
		fontSize: 14,
	},
	radioSelectedCircle: {
		width: 10,
		height: 10,
		backgroundColor: '#0DAFB9',
		borderRadius: 50,
		top: 3,
		left: 3,
	},
});

export default UIRadio;