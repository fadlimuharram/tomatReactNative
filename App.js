import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import LoginScreen from "./screens/Login";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import HistoryPenyakit from "./screens/HistoryPenyakit";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      const store = configureStore();
      return (
        // <View style={styles.container}>
        //   {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        //   <AppNavigator />
        // </View>

        <Provider store={store}>
          <LoginScreen />
          {/* <HistoryPenyakit /> */}
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png"),
        require("./assets/images/Rectangle1.png"),
        require("./assets/images/elaine-casap-86020-unsplash.jpg"),
        require("./assets/images/bgGreen.png"),
        require("./assets/images/nopoto.jpg")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        ...Icon.FontAwesome.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
        signpainter: require("./assets/fonts/SignPainter-HouseScript-Regular.ttf"),
        Roboto_medium: require("./assets/fonts/Roboto-Medium.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

//  {
//    "probaPenyakit":  [
//       {
//        "data":  {
//          "Debug":  {
//            "Bacterial_spot": 1,
//            "Late_blight": 1.2915424610734472e-21,
//            "Septoria_leaf_spot": 0,
//            "Spider_mites": 6.4643403864855564e-18,
//          },
//          "penyakit":  {
//            "proba-0":  {
//              "gejala": "abc gejala 0",
//              "nama": "Bacterial Spot",
//              "penangan": "www 0",
//              "probability": 1,
//            },
//            "proba-1":  {
//              "gejala": "abc gejala 1",
//              "nama": "Late Blight",
//              "penangan": "www 1",
//              "probability": 1.2915424610734472e-21,
//            },
//            "proba-2":  {
//              "gejala": "abc gejala 3",
//              "nama": "Spider Mites",
//              "penangan": "www 3",
//              "probability": 6.4643403864855564e-18,
//            },
//          },
//          "uploadURI": "http://192.168.43.70:5050/static/upload/image.jpg",
//        },
//        "key": 0.09124168040071634,
//      },
//    ],
//    "selectedProba": null,
//  }
