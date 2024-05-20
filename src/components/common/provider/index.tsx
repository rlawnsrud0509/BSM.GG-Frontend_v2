"use client";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const Provider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  const apolloClient = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_BASE_URL}graphql`,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </QueryClientProvider>
  );
};

export default Provider;
