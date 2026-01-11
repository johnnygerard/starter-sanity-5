import { defineCliConfig } from "sanity/cli";

/*
Examples of Sanity CLI read-only commands:
```sh
npm run sanity -- cors list
npm run sanity -- dataset list
npm run sanity -- projects list
npm run sanity -- documents query '*[_type == "post"]{ title }'
```
*/

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
