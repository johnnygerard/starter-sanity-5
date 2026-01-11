import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./src/environment";
import { schemaTypes } from "./src/schema-types";

export default defineConfig({
  name: "default",
  title: "Sanity 5 Starter",
  dataset,
  projectId,
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
