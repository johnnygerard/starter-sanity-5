import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "srzdwb3a",
    dataset: "production",
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  },
});
