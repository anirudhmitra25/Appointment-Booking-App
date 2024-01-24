import React from "react";
import { Header } from "./components";
import {
  RightBand1,
  RightBand2,
  RightBand3,
  LeftBand1,
  LeftBand2,
} from "./icons";
import "./styles/layout.css";

const Layout = ({ children }: any) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="main">{children}</main>
      <div className="blur-box"></div>
      <div className="blur-box-2"></div>
      <div className="band-container">
        <RightBand1 />
        <RightBand2 />
        <RightBand3 />
      </div>
      <div className="band-container-left">
        <LeftBand1 />
        <LeftBand2 />
      </div>
    </div>
  );
};

export { Layout };
