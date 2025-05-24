"use client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/graphql`,
  cache: new InMemoryCache(),
});

import React from "react";

export default function ApolloContext({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
