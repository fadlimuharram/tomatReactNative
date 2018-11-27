import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View
} from "react-native";
import { Container, Button } from "native-base";
import { DetomatoesText } from '../../components/DetomatoesText';

const loginBg = require("../../assets/images/elaine-casap-86020-unsplash.jpg");
const rectBg = require("../../assets/images/Rectangle1.png");


export default class Login extends Component {
  static navigationOptions = {
      drawerLockMode: 'locked-open',
  }
  render() {
    return (
      <Container>
        <StatusBar barStyle="default" />
        <ImageBackground source={loginBg} style={styles.imageContainer}>
          <ImageBackground source={rectBg} style={styles.imageContainer}>
            <View style={styles.detomatoesContainer}>
              <DetomatoesText style={styles.detomatoes}>DETOMATOES </DetomatoesText>
              <Text style={styles.detomatoesDesc}>
                Pendeteksi Penyakit Pada Tanaman Tomat
              </Text>
              <Button style={styles.btnMasuk} onPress={() => this.props.navigation.navigate("HomeScreen")} light>
                <Text style={styles.txtMasuk}>Masuk</Text>
              </Button>
            </View>
          </ImageBackground>
        </ImageBackground>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  detomatoesContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  detomatoes: {
    color: "white",
    fontSize: 50
  },
  detomatoesDesc: {
    color: "#C6C6C6"
  },
  btnMasuk: {
    padding: 50,
    alignSelf: "center",
    marginTop: 30,
    backgroundColor: "rgba(255,255,255,0.3)"
  },
  txtMasuk: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15
  }
});
