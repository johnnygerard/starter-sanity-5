const assertAndGetVariable = (
  value: string | undefined,
  name: string,
): string => {
  if (value === undefined)
    throw new Error(`The environment variable "${name}" is undefined.`);

  return value;
};

export const apiVersion = assertAndGetVariable(
  process.env.SANITY_STUDIO_API_VERSION,
  "SANITY_STUDIO_API_VERSION",
);

export const appId = assertAndGetVariable(
  process.env.SANITY_STUDIO_APP_ID,
  "SANITY_STUDIO_APP_ID",
);

export const dataset = assertAndGetVariable(
  process.env.SANITY_STUDIO_DATASET,
  "SANITY_STUDIO_DATASET",
);

export const projectId = assertAndGetVariable(
  process.env.SANITY_STUDIO_PROJECT_ID,
  "SANITY_STUDIO_PROJECT_ID",
);
