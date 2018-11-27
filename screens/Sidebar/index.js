import React from "react";
import { AppRegistry, Image, View, StatusBar, StyleSheet } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";

const bgGreen = require('../../assets/images/bgGreen.png');
const noPhoto = require("../../assets/images/nopoto.jpg");

const routes = ["HomeScreen", "DeteksiCapture", "ListPenyakit"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
        <Image
            source={bgGreen}
            style={{
              height: 150,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
        <View style={styles.containerStyle}>
          <Image
            square
            style={{
              height: 80,
              width: 70,
              borderRadius: 80 / 2,
             
            }}
            source={noPhoto}
          />

          <Text style={styles.profileName}>Fadli Muharram</Text>
        </View>
          <List
            style={{marginTop:-100}}
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={()=>this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginTop: 20,
    marginLeft: 25    
  },
  profileName: {
    marginTop: 15,
    fontWeight: "bold"
  }
})