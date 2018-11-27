import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  StyleSheet,
  ImageBackground
} from "react-native";
import {
  Container,
  Drawer,
  Header,
  Body,
  Button,
  Title,
  Left,
  Right
} from "native-base";
import CardTomat from "../../components/CardHome";
import { Icon } from "expo";
import HeaderCustom from "../../components/HeaderCustom";

const screenBg = require("../../assets/images/background-background-image-clear-sky-1054222.jpg");

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <HeaderCustom
          navigateTo={() => this.props.navigation.openDrawer()}
          nameFont="bars"
          title="Home"
        />
        <ImageBackground source={screenBg} style={styles.imageContainer}>
          <ScrollView>
            <View style={styles.cardStyle}>
              <CardTomat
                iconName="camera"
                title="Deteksi Tomat"
                subTitle="kamera deteksi"
                navigateTo={() =>
                  this.props.navigation.navigate("SelectFromGallery")
                }
              />
              <CardTomat
                iconName="leaf"
                title="Penyakit Tomat"
                subTitle="Kumpulan Penyakit Tomat"
                navigateTo={() =>
                  this.props.navigation.navigate("HistoryPenyakit")
                }
              />
            </View>
            <View style={styles.cardStyle}>
              <CardTomat
                iconName="history"
                title="history"
                subTitle="Riwayat Deteksi"
                navigateTo={() =>
                  this.props.navigation.navigate("HistoryPenyakit")
                }
              />
              <CardTomat iconName="user" title="Profile" />
            </View>
            <View style={styles.cardStyle}>
              <CardTomat iconName="cogs" title="Pengaturan" />
            </View>
          </ScrollView>
        </ImageBackground>
      </Container>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#22C25C"
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  cardContainer: {
    flex: 1
  },
  cardStyle: {
    flex: 1,
    flexDirection: "row"
  }
});
