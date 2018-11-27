import React from "react";
import { DrawerNavigator } from "react-navigation";
import HasilScreen from "./HasilScreen";
import CameraScreen from "../CameraScreen";
import SideBar from "../Sidebar";

const HasilScreenRouter = DrawerNavigator(
  {
    HasilScreen: { screen: HasilScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default HasilScreenRouter;
