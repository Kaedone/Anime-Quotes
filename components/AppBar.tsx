import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../styles/colors";
import { Fonts } from "../styles/typography";

class AppBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>AnimeQ</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.BOLD,
    fontSize: 20,
    textAlign: "center",
    color: Colors.TEXT,
  },
  container: {
    marginTop: 26,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 56,
    backgroundColor: Colors.PRIMARY
  },
});

export default AppBar;
