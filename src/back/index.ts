import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Contract" type defines the queryable fields for every contract in our data source.

  type Contract {
    id: Int
    title: String
    author: String
    date: String
  }

  type Admin {
    id: Int
    email: String
    password: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    contracts: [Contract]
    admin: Admin
  }
`;

const contracts = [
    {
        id: 0,
        title: 'The Awakening',
        author: 'Kate Chopin',
        date: '30/09/2020',
    },
    {
        id: 1,
        title: 'City of Glass',
        author: 'Paul Auster',
        date: '30/09/2020',
    },
];

const admin = [
    {
        id: 0,
        email: 'admin@admin.com',
        password: 'hello123',
    }
]


// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        contracts: () => contracts,
        admin: () => admin
    },

    Mutation: {
        
    }
};


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);