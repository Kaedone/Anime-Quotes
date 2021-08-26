import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  noPadding?: boolean;
}

class Container extends React.Component<Props> {
  render() {
    return (
      <View
        style={[styles.container, { padding: this.props.noPadding ? 0 : 20 }]}
      >
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
});

export default Container;
