import { Text, Window, hot, View, Button } from "@nodegui/react-nodegui";
import React from "react";
import { QIcon, WindowType } from "@nodegui/nodegui";
import nodeguiIcon from "../assets/nodegui.jpg";
import { useHistory } from "react-router";
import { AppRoutes } from "./appRoutes";
import { ConfigRepo } from "./config";
const minSize = { width: 450, height: 720 };
const winIcon = new QIcon(nodeguiIcon);

type AppProps = {};
type AppState = {};
function App() {
  const history = useHistory();
  const config = ConfigRepo.getInstance();

  return (
    <Window
      windowIcon={winIcon}
      windowTitle="PRetzel 🥨"
      minSize={minSize}
      styleSheet={styleSheet}
      windowFlags={{ [WindowType.WindowStaysOnTopHint]: true }}
    >
      <View style={containerStyle}>
        <AppRoutes />
      </View>
    </Window>
  );
}

const containerStyle = `
  flex: 1;
  padding: 10px;
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
