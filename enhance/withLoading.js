import React, { Component } from "react";
import { compose, withHandlers, withProps, withState } from "recompose";
import Loading from "../components/Loading";

const withLoading = compose(
  withState("loading", "updateLoading", true),
  withHandlers({
    toggleLoading: props => val => props.updateLoading(val)
  })
);

export default withLoading;
