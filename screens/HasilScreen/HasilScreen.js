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

class HasilScreen extends Component {
  render() {
    const { probaPenyakit, keyCurrentProba } = this.props.proba;
    let probanya = probaPenyakit.find(proba => proba.key === keyCurrentProba);
    const { penyakit, uploadURI } = probanya.data;
    console.log("ini di hasil screen", penyakit);
    // const { uploadURI } = this.props.probanya;
    return (
      <Container>
        <HeaderCustom
          navigateTo={() => this.props.navigation.navigate("HomeScreen")}
          nameFont="chevron-left"
          title={penyakit.proba0.nama}
        />
        <ScrollView style={styles.containerStyle}>
          <View style={styles.gambar}>
            <Image style={styles.gambar_img} source={{ uri: uploadURI }} />
          </View>
          <View style={styles.deskripsi}>
            <Text style={styles.namapenyakit}>
              {penyakit.proba0.nama.toUpperCase()}
            </Text>
            <Text>gejala</Text>
            <HTML
              html={penyakit.proba0.gejala}
              imagesMaxWidth={Dimensions.get("window").width}
            />
            <Text>penanganan</Text>
            <HTML
              html={penyakit.proba0.penangan}
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

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddProba: (proba, keynya) => dispatch(addProba(proba, keynya)),
//     onEditCurrentKey: key => dispatch(editKeyCurrentProba(key))
//   };
// };

export default connect(mapStateToProps)(HasilScreen);
