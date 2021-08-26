import AppLoading from "expo-app-loading";
import { loadAsync } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AppBar from "./components/AppBar";
import Button from "./components/Button";
import Container from "./components/Container";
import { Colors } from "./styles/colors";
import { FontFiles, Fonts } from "./styles/typography";

interface Data {
  anime: string;
  character: string;
  quote: string;
}

interface State {
  fontLoaded: boolean;
  data: Data | null;
}

class App extends React.Component<{}, State> {
  state = {
    fontLoaded: false,
    data: null,
  };

  async loadFonts() {
    await loadAsync(FontFiles);
  }

  generateQuote() {
    let t = this;
    fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((quote: Data) => t.setState({ data: quote }));
  }

  componentDidMount() {
    this.loadFonts().then(() => this.setState({ fontLoaded: true }));
    this.generateQuote();
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          <StatusBar style="light" backgroundColor={Colors.PRIMARY} />
          <AppBar />
          <Container>
            <ScrollView>
              <Text style={styles.hero}>
                {this.state.data != null && this.state.data.character}
              </Text>

              <Text style={styles.title}>
                {this.state.data != null && '"' + this.state.data.anime + '"'}
              </Text>

              <Text style={styles.quote}>
                {this.state.data != null && this.state.data.quote}
              </Text>
            </ScrollView>

            <Button onPress={() => this.generateQuote()}>Generate</Button>
          </Container>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  quote: {
    fontFamily: Fonts.REGULAR,
    fontSize: 20,
    textAlign: "center",
  },
  hero: {
    fontFamily: Fonts.RETINA,
    fontSize: 50,
    textAlign: "center",
  },
  title: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 35,
    textAlign: "center",
  },
});

export default App;
