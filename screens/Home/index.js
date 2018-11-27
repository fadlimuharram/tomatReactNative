import React from "react";
import { DrawerNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import CameraScreen from "../CameraScreen";
import HistoryPenyakit from "../HistoryPenyakit";
import SelectFromGallery from "../SelectFromGallery";
import SideBar from "../Sidebar";

const HomeScreenRouter = DrawerNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    CameraScreen: { screen: CameraScreen },
    HistoryPenyakit: { screen: HistoryPenyakit },
    SelectFromGallery: { screen: SelectFromGallery }
  },
  {
    initialRouteName: "HomeScreen",
    contentComponent: props => <SideBar {...props} />
  }
);

export default HomeScreenRouter;
