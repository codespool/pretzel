import { View, Text, LineEdit, Button } from "@nodegui/react-nodegui";
import React from "react";

export function Login() {
  return (
    <View>
      <Text>Login</Text>
      <LineEdit placeholderText={"Github username"} />
      <LineEdit placeholderText={"Github API token"} />
      <Button>Login</Button>
    </View>
  );
}
