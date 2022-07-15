import App from "next/app";
import Head from "next/head";
import React from "react";
import { Header } from "../components/Header";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { Modal } from "../components/items/Modal";
const styles = {
  layout: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  header: {
    height: 60,
  },
  main: {
    flex: 1,
  },
  footer: {
    height: 60,
  },
};

export default class RootApp extends App {
  render() {
    const { Component, ...other } = this.props;
    return (
      <>
        <RecoilRoot>
          <Header></Header>
          <Modal></Modal>
          <Component {...other} />
        </RecoilRoot>
      </>
    );
  }
}
