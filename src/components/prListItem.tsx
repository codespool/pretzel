import { View, Text, useEventHandler } from "@nodegui/react-nodegui";
import { QLabelSignals } from "@nodegui/nodegui";

import React from "react";
import { useHistory } from "react-router";

interface PrListItemProps {
  html_url: string;
  title: string;
}

export function PrListItem(props: PrListItemProps) {
  const history = useHistory();
  const handleItem = useEventHandler<QLabelSignals>(
    {
      MouseButtonRelease: () => {
        history.push("review", props);
      },
    },
    []
  );
  return (
    <View>
      <Text on={handleItem}>{props.title}</Text>
    </View>
  );
}
