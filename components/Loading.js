import React from "react";
import { StyleSheet, Text } from "react-native";
import { Container, Header, Content, Spinner } from "native-base";

const Loading = () => (
  <Container>
    <Content style={styles.contentloading}>
      <Spinner color="green" />
    </Content>
  </Container>
);

const styles = StyleSheet.create({
  contentloading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Loading;
