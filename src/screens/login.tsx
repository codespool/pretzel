import {
  View,
  Text,
  LineEdit,
  Button,
  useEventHandler,
} from "@nodegui/react-nodegui";
import { QLineEditSignals, QPushButtonSignals } from "@nodegui/nodegui";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { ConfigRepo } from "../config";
import { request } from "@octokit/request";

export function Login() {
  const [username, setUsername] = useState("");
  const [apiToken, setApiToken] = useState("");
  const history = useHistory();
  const config = ConfigRepo.getInstance();
  const handleUsernameInput = useEventHandler<QLineEditSignals>(
    {
      textChanged: (text) => setUsername(text),
    },
    []
  );
  const handleTokenInput = useEventHandler<QLineEditSignals>(
    {
      textChanged: (text) => setApiToken(text),
    },
    []
  );
  const handleButtonClick = useEventHandler<QPushButtonSignals>(
    {
      clicked: async () => {
        try {
          const response = await request("GET /user", {
            headers: {
              authorization: `token ${apiToken}`,
            },
          });
          if (response.data.login !== username) {
            throw new Error("Invalid user");
          }
          config.set("ghUsername", username);
          config.set("ghApiKey", apiToken);
          history.push("list");
        } catch (error) {
          console.error(error);
        }
      },
    },
    [username, apiToken]
  );
  return (
    <View>
      <Text>Login</Text>
      <LineEdit
        placeholderText={"Github username"}
        text={username}
        on={handleUsernameInput}
      />
      <LineEdit
        placeholderText={"Github API token"}
        text={apiToken}
        on={handleTokenInput}
      />
      <Button on={handleButtonClick}>Login</Button>
    </View>
  );
}
