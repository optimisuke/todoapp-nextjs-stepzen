import { CodegenConfig } from "@graphql-codegen/cli";

import * as dotenv from "dotenv";
dotenv.config();
const apiKey = process.env.NEXT_PUBLIC_API_KEY || "invalid-api-key";
const uri = process.env.NEXT_PUBLIC_API_URI || "invalid-api-uri";

const config: CodegenConfig = {
  schema: [
    {
      [uri]: {
        headers: {
          Authorization: `Apikey ${apiKey}`,
        },
      },
    },
  ],
  documents: ["./**/*.graphql"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};

export default config;
