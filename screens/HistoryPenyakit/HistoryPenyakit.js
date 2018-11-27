import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
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
import { connect } from "react-redux";
import HeaderCustom from "../../components/HeaderCustom";
const loginBg = require("../../assets/images/elaine-casap-86020-unsplash.jpg");
import { editKeySelectedHistoryProba } from "../../store/actions";

class HistoryPenyakit extends React.Component {
  probaOnClick = key => {
    this.props.onClickProba(key);
    this.props.navigation.navigate("DetailPenyakit");
  };

  renderAllHistory() {
    const { allProba } = this.props;
    return allProba.length > 0 ? (
      allProba.map(proba => this.displayProba(proba.data, proba.key))
    ) : (
      <Text>History Kosong</Text>
    );
  }

  displayProba = ({ uploadURI, penyakit }, key) => (
    <TouchableOpacity
      style={styles.cardStyle}
      onPress={() => this.probaOnClick(key)}
      key={uploadURI}
    >
      <View style={styles.gambar}>
        <Image style={styles.gambar_img} source={{ uri: uploadURI }} />
      </View>
      <View style={styles.deskripsi}>
        <Text style={styles.namapenyakit}>
          {penyakit.proba0.nama.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <Container>
        <HeaderCustom
          navigateTo={() => this.props.navigation.navigate("HomeScreen")}
          nameFont="chevron-left"
          title="History Penyakit"
        />

        <ScrollView style={styles.containerStyle}>
          {this.renderAllHistory()}
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
  },
  cardStyle: {
    marginBottom: 5
  }
});

const mapStateToProps = state => {
  return {
    allProba: state.proba.probaPenyakit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickProba: key => dispatch(editKeySelectedHistoryProba(key))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryPenyakit);
