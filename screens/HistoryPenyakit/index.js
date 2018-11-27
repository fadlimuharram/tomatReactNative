import React from "react";
import { DrawerNavigator } from "react-navigation";
import HomeScreen from "../Home";
import HistoryPenyakit from "./HistoryPenyakit";
import DetailPenyakit from "./DetailPenyakit";
import SideBar from "../Sidebar";

const HistoryPenyakitScreenRouter = DrawerNavigator(
  {
    HistoryPenyakit: { screen: HistoryPenyakit },
    DetailPenyakit: { screen: DetailPenyakit }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default HistoryPenyakitScreenRouter;
