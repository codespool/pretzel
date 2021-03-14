import React from "react";
import { Button } from "@nodegui/react-nodegui";

import { useHistory } from "react-router";

export function LoginButton() {
  let history = useHistory();

  const buttonHandler = {
    clicked: () => {
      history.push("list");
    },
  };

  return <Button on={buttonHandler}>login</Button>;
}
