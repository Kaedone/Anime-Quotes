import React from "react";
import { View, Text, StyleSheet, Pressable, PressableProps } from "react-native";
import { Colors } from "../styles/colors";
import { Fonts } from "../styles/typography";

interface Props extends PressableProps {}

class Button extends React.Component<Props> {
  render() {
    return (
      <Pressable {...this.props}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>{this.props.children}</Text>
        </View>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 50,
    width: "100%",
  },
  text: {
    fontFamily: Fonts.BOLD,
    fontSize: 20,
    textAlign: "center",
    color: Colors.TEXT,
  },
});

export default Button;
