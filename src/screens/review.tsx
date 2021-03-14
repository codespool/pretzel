import { View, Text } from "@nodegui/react-nodegui";
import React from "react";
import { useHistory } from "react-router";

export function Review() {
  const history = useHistory();
  console.log("AAAA", history.location.state);
  return (
    <View>
      <Text>Review</Text>
    </View>
  );
}
