import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  Container,
  Drawer,
  Header,
  Body,
  Button,
  Title,
  Left,
  Right,
  Content,
  Spinner
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { Camera, Permissions } from "expo";
import { connect } from "react-redux";
import Loading from "../../components/Loading";
import { addProba, editKeyCurrentProba } from "../../store/actions";
import HeaderCustom from "../../components/HeaderCustom";

const uuidv4 = require("uuid/v4");

class CameraScreen extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    isloading: false
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

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

  async snapPhoto() {
    console.log("Button Pressed");
    if (this.camera) {
      console.log("Taking photo");

      const options = {
        quality: 1,
        base64: true,
        fixOrientation: true,
        exif: true
      };

      await this.camera.takePictureAsync(options).then(photo => {
        this.setState({
          isloading: true
        });
        photo.exif.Orientation = 1;
        console.log(photo);
        this.uploadPhoto(photo);
      });
    }
  }

  render() {
    const { hasCameraPermission, isloading } = this.state;
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
            navigateTo={() => this.props.navigation.navigate("HomeScreen")}
            nameFont="chevron-left"
            title="Capture Tanaman"
          />
          <Camera
            style={styles.cameraStyle}
            ref={ref => {
              this.camera = ref;
            }}
            type={this.state.type}
          >
            <TouchableOpacity onPress={this.snapPhoto.bind(this)}>
              <FontAwesome
                name="camera"
                size={50}
                style={{ color: "#22C25C" }}
              />
            </TouchableOpacity>
          </Camera>
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  cameraStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddProba: (proba, keynya) => dispatch(addProba(proba, keynya)),
    onEditCurrentKey: key => dispatch(editKeyCurrentProba(key))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CameraScreen);
