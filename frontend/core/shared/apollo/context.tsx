"use client";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_SERVER,
  // uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

import React from "react";

export default function ApolloContext({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}
