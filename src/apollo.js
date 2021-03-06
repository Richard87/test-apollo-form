import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


export const client = new ApolloClient({
    link: new HttpLink({uri: "http://localhost:8000/api/graphql"}),
    cache: new InMemoryCache(),
});