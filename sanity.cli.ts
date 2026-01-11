import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "srzdwb3a",
    dataset: "production",
  },
  deployment: {
    // https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
    autoUpdates: true,
  },
});
