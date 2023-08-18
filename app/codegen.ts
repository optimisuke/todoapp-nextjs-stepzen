import { CodegenConfig } from "@graphql-codegen/cli";

import * as dotenv from "dotenv";
dotenv.config();
const apiKey = process.env.NEXT_PUBLIC_API_KEY || "invalid-api-key";

const config: CodegenConfig = {
  schema: [
    {
      "https://miracatu.stepzen.net/api/todos/__graphql": {
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
