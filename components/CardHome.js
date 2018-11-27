import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Container, Button } from "native-base";
import { FontAwesome } from '@expo/vector-icons';

const CardHome = props => (
  <Button style={styles.bodySection} onPress={props.navigateTo}>
    <View style={styles.circle}>
      <View style={styles.circleBody}>
        <FontAwesome
          name={props.iconName || "people"}
          size={25}
          style={styles.iconSection}
        />
      </View>
    </View>
    <View>
      <Text style={styles.titleStyle}>{props.title || " "}</Text>
      <Text style={styles.subTitleStyle}>{props.subTitle || " "}</Text>
    </View>
  </Button>
);

export default CardHome;

const styles = StyleSheet.create({
  bodySection: {
    backgroundColor: "rgba(247,255,241,0.9)",
    width: "47%",
    height: 200,
    marginLeft: "2%",
    marginRight: "2%",
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
