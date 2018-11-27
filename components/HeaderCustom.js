import React from "react";
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

const HeaderCustom = props => (
  <Header
    androidStatusBarColor="#1A9A45"
    style={{ backgroundColor: "#22C25C" }}
  >
    <Left>
      <Button transparent onPress={props.navigateTo}>
        <FontAwesome name={props.nameFont} size={25} color="white" />
      </Button>
    </Left>
    <Body>
      <Title>{props.title}</Title>
    </Body>
  </Header>
);

export default HeaderCustom;
