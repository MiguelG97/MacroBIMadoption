import { CodegenConfig } from "@graphql-codegen/cli";

/**0)You specify the localtion of this file in the package.json script */
const config: CodegenConfig = {
  /**1) to our graphql enpoint */
  schema: "http://localhost:3000/graphql",
  /**2). Point to files that export the original graphql queries, mutations, subscriptions [use localhost:3000/graphql to help you with]
   * parsed by the graphql() command generated in step (3), so at the beginning you call cli to create this method.
   */
  documents: ["core/shared/gql/**/*.{ts,tsx}", "modules/**/*.{ts,tsx}"], //shared for returning all data, modules to return specific fields

  ignoreNoDocuments: true, //to not throw error when calling the cli to created the graphql()command to use in step (2)
  /**3).run the command graphql-codegen ... to specify where output
   * from (2) might me placed*/
  generates: {
    "./core/utils/generator/": {
      preset: "client",
    },
  },
};

export default config;
