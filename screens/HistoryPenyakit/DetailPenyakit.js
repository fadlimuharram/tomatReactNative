import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions
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
import { FontAwesome } from "@expo/vector-icons";
import { Camera, Permissions } from "expo";
import HTML from "react-native-render-html";
import { connect } from "react-redux";
import { selectProbaByCurrKey } from "../../store/actions";
import HeaderCustom from "../../components/HeaderCustom";

class DetailPenyakit extends Component {
  render() {
    const { probaPenyakit, keySelectedHistoryProba } = this.props.proba;
    let proba = probaPenyakit.find(
      proba => proba.key === keySelectedHistoryProba
    );
    const { penyakit, uploadURI } = proba.data;
    const { proba0 } = penyakit;

    return (
      <Container>
        <HeaderCustom
          navigateTo={() => this.props.navigation.navigate("HistoryPenyakit")}
          nameFont="chevron-left"
          title={proba0.nama}
        />
        <ScrollView style={styles.containerStyle}>
          <View style={styles.gambar}>
            <Image style={styles.gambar_img} source={{ uri: uploadURI }} />
          </View>
          <View style={styles.deskripsi}>
            <Text style={styles.namapenyakit}>{proba0.nama.toUpperCase()}</Text>
            <Text>gejala</Text>
            <HTML
              html={proba0.gejala}
              imagesMaxWidth={Dimensions.get("window").width}
            />
            <Text>penanganan</Text>
            <HTML
              html={proba0.penangan}
              imagesMaxWidth={Dimensions.get("window").width}
            />
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  },
  gambar: {
    width: "100%",
    height: 300
  },
  gambar_img: {
    width: "100%",
    height: "100%"
  },
  deskripsi: {
    backgroundColor: "#F7FFF1",
    fontSize: 10,
    padding: 5
  },
  namapenyakit: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20
  }
});

const mapStateToProps = state => {
  return { proba: state.proba };
};

export default connect(mapStateToProps)(DetailPenyakit);
