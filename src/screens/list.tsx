import { View, Text } from "@nodegui/react-nodegui";
import React, { useState, useEffect } from "react";
import { request } from "@octokit/request";

import { ConfigRepo } from "../config";
import { PrListItem } from "../components/prListItem";
interface PR {
  html_url: string;
  id: number;
  title: string;
}

export function List() {
  const [prList, setPrList] = useState<PR[] | null>(null);

  useEffect(() => {
    async function getPRs() {
      const config = ConfigRepo.getInstance();
      const username = config.get("ghUsername");
      const apiToken = config.get("ghApiKey");
      try {
        const response = await request("GET /search/issues", {
          q: `type:pr review-requested:${username} is:open`,
          headers: {
            authorization: `token ${apiToken}`,
          },
        });
        console.log(response.status, response.data.items.length);
        if (response.status === 200 && response.data?.items.length) {
          setPrList(response.data.items);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getPRs();
  }, []);
  return (
    <View>
      <Text>List</Text>
      {prList &&
        prList.map((PR) => (
          <PrListItem key={PR.id} html_url={PR.html_url} title={PR.title} />
        ))}
    </View>
  );
}
