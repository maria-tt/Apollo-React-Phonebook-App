const {gql, ApolloServer} = require('apollo-server');
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');

// Data
const phonebookData = require('./telefonbuch.json')


// Defining type definitions for a graphql schema
const typeDefs = gql `
    # Person type defines querable fields for every person in the phonebook data 
    type Person {
        name: String
        phone: String
    }
    # Returns an array of the Persons in the phonebook
    type Query {
        phonebookData: [Person]
    }
`;

// Defining resolvers for for fetching the types defined in the schema
const resolvers = {
    // Retrieves phonebook data for every person from the data
    Query: {
        phonebookData: () => phonebookData,
    },
};

// ApolloServer instance
const server = new ApolloServer({
    typeDefs, 
    resolvers,
    csrfPrevention: true, 
    cache: "bounded",
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});

// Default port value is 4000
server.listen(4000)
    .then((url) => console.log(`Server running at ${url}`));
