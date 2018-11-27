import React, { Component } from "react";
import { ImagePicker } from "expo";
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Image
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
import HeaderCustom from "../../components/HeaderCustom";
import { connect } from "react-redux";
import { addProba, editKeyCurrentProba } from "../../store/actions";
const uuidv4 = require("uuid/v4");

class SelectFromGallery extends Component {
  state = {
    image: null,
    imageWidth: null,
    imageHeight: null,
    dataImage: null,
    isloading: false
  };

  render() {
    let { image, imageWidth, imageHeight, isloading } = this.state;

    if (isloading) {
      return (
        <Container>
          <Content style={styles.contentloading}>
            <Spinner color="green" />
          </Content>
        </Container>
      );
    } else {
      return (
        <Container>
          <HeaderCustom
            navigateTo={() => this.props.navigation.openDrawer()}
            nameFont="bars"
            title="Home"
          />
          <ScrollView>
            <View style={styles.content}>
              <Button onPress={this._pickImage} style={styles.btnPilih}>
                <Text>Pilih Gambar</Text>
              </Button>

              {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width: "95%", height: 400, alignSelf: "center" }}
                />
              )}

              {image && (
                <Button onPress={this._upload} style={styles.btnPilih}>
                  <Text>Deteksi</Text>
                </Button>
              )}
            </View>
          </ScrollView>
        </Container>
      );
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({
        image: result.uri,
        imageWidth: result.height,
        imageHeight: result.height,
        dataImage: result
      });
    }
  };

  _upload = async () => {
    this.uploadPhoto(this.state.dataImage);
  };

  uploadPhoto(photo) {
    var data = new FormData();
    let keynya = uuidv4();
    data.append("file", {
      ...photo,
      name: "image" + keynya + ".jpg",
      type: "image/jpeg"
    });

    fetch("http://192.168.43.70:5050/predict", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: data
    })
      .then(res => res.json())
      .then(resJson => {
        const { onAddProba, onEditCurrentKey } = this.props;
        onAddProba(resJson, keynya);
        onEditCurrentKey(keynya);
        this.setState({
          isloading: false
        });
        this.props.navigation.navigate("HasilScreen");
      })
      .catch(err => {
        console.log(err);
      });
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  btnPilih: {
    alignSelf: "center",
    backgroundColor: "rgba(247,255,241,0.9)",
    color: "white",
    marginTop: 5
  }
});

const mapsDispatchToProps = dispatch => {
  return {
    onAddProba: (proba, keynya) => dispatch(addProba(proba, keynya)),
    onEditCurrentKey: key => dispatch(editKeyCurrentProba(key))
  };
};

export default connect(
  null,
  mapsDispatchToProps
)(SelectFromGallery);
