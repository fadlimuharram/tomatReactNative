import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { Ionicons } from "@expo/vector-icons";
import { Container, Button } from "native-base";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Links"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
         * content, we just wanted to provide you with some helpful links */}
        <Button style={styles.bodySection}>
          <View style={styles.circle}>
            <View style={styles.circleBody}>
              {/* <Icon name={props.iconName} size={25} style={styles.iconSection} /> */}
              <Ionicons name="md-checkmark-circle" size={32} color="green" />
            </View>
          </View>
          <View>
            <Text style={styles.titleStyle}>{this.props.title || " "}</Text>
            <Text style={styles.subTitleStyle}>
              {this.props.subTitle || " "}
            </Text>
          </View>
        </Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  bodySection: {
    backgroundColor: "rgba(247,255,241,0.9)",
    width: "47%",
    height: 200,
    marginLeft: "2%",
    marginTop: 10,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  circle: {
    height: 50,
    width: 50,
    backgroundColor: "#22C25C",
    borderRadius: 50 / 2
  },
  circleBody: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  },
  iconSection: {
    alignSelf: "center",
    color: "white"
  },
  titleStyle: {
    marginTop: 7,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  subTitleStyle: {
    textAlign: "center"
  }
});
