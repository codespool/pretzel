import { Text, Window, hot, View } from "@nodegui/react-nodegui";
import React from "react";
import { QIcon } from "@nodegui/nodegui";
import nodeguiIcon from "../assets/nodegui.jpg";
import { MemoryRouter } from "react-router";
import { AppRoutes } from "./appRoutes";

const minSize = { width: 500, height: 520 };
const winIcon = new QIcon(nodeguiIcon);
class App extends React.Component {
  render() {
    return (
      <MemoryRouter>
        <Window
          windowIcon={winIcon}
          windowTitle="PRetzel 🥨"
          minSize={minSize}
          styleSheet={styleSheet}
        >
          <View style={containerStyle}>
            <Text id="welcome-text">Welcome to NodeGui 🐕</Text>
            <Text id="step-1">1. Play around</Text>
            <Text id="step-2">2. Debug</Text>
            <AppRoutes />
          </View>
        </Window>
      </MemoryRouter>
    );
  }
}

const containerStyle = `
  flex: 1; 
`;

const styleSheet = `
  #welcome-text {
    font-size: 24px;
    padding-top: 20px;
    qproperty-alignment: 'AlignHCenter';
    font-family: 'sans-serif';
  }

  #step-1, #step-2 {
    font-size: 18px;
    padding-top: 10px;
    padding-horizontal: 20px;
  }
`;

export default hot(App);
