import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3000/graphql",
  documents: ["modules/**/*.{ts,tsx}"],
  // ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./core/utils/generator/": {
      preset: "client",
    },
  },
};

export default config;
