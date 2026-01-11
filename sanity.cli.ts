import { defineCliConfig } from "sanity/cli";
import tsconfigPaths from "vite-tsconfig-paths";
import { appId, dataset, projectId } from "~/environment";

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
    dataset,
    projectId,
  },
  deployment: {
    // Enable fine grained version selection (https://www.sanity.io/docs/studio/latest-version-of-sanity#k0896ed4574b7)
    appId,
    // https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
    autoUpdates: true,
  },
  vite: {
    plugins: [tsconfigPaths()],
  },
});
