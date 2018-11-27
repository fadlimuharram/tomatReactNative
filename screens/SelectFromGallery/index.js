import React from "react";
import { DrawerNavigator } from "react-navigation";
import SelectFromGallery from "./SelectFromGallery";
import HasilScreen from "../HasilScreen";
import SideBar from "../Sidebar";

const SelectFromGalleryScreenRouter = DrawerNavigator(
  {
    SelectFromGallery: { screen: SelectFromGallery },
    HasilScreen: { screen: HasilScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default SelectFromGalleryScreenRouter;
