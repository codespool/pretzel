import { Renderer } from "@nodegui/react-nodegui";
import React from "react";
import App from "./app";
import { MemoryRouter } from "react-router";
import { ConfigRepo } from "./config";
process.title = "Pretzel";

const config = ConfigRepo.getInstance();
console.log(config.get("ghApiKey"));
Renderer.render(
  <MemoryRouter
    initialEntries={config.get("ghApiKey") ? ["/list"] : ["/login"]}
    initialIndex={0}
  >
    <App />
  </MemoryRouter>
);
// This is for hot reloading (this will be stripped off in production by webpack)
if (module.hot) {
  module.hot.accept(["./app"], function () {
    Renderer.forceUpdate();
  });
}
