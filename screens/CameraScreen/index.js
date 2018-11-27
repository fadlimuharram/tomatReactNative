import React from "react";
import { DrawerNavigator } from "react-navigation";
import CamereScreen from "./CameraScreen";
import HasilScreen from "../HasilScreen";
import SideBar from "../Sidebar";

const CamereScreenRouter = DrawerNavigator(
  {
    CamereScreen: { screen: CamereScreen },
    HasilScreen: { screen: HasilScreen }
  },
  {
    initialRouteName: "CamereScreen"
  }
);

export default CamereScreenRouter;
