// pages/_app.js
import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const apiKey = process.env.NEXT_PUBLIC_API_KEY || "invalid-api-key";
// const uri = process.env.NEXT_PUBLIC_API_URI || "invalid-api-uri";
const uri = "https://miracatu.stepzen.net/api/todos/__graphql";
const httpLink = new HttpLink({
  uri: uri,
});
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Apikey ${apiKey}`,
    },
  };
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
