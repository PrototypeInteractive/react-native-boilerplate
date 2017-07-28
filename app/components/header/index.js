import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
	header: {
		height: 40,
		marginTop: 20,
		backgroundColor: "white"
	},
	text: {
		textAlign: "center"
	}
});

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.onBackPress = this.onBackPress.bind(this);
	}

	onBackPress() {
		Actions.pop();
	}

	render() {
		return (
			<View style={styles.header}>
				<Button onPress={this.onBackPress} title="Back" />
				<Text style={styles.text}>
					{this.props.title}
				</Text>
			</View>
		);
	}
}
