'use strict'

const { GraphQLServer } = require('graphql-yoga')
const typeDefs = `
type Query {
    info: String!,
    feed: [Link!]!,
    link(id: ID!): Link
}
type Link {
    id: ID!,
    description: String!,
    url: String!
}
type Mutation {
    post(url: String!, description: String!): Link!,
    updateLink(id: ID!, url: String, description: String): Link,
    deleteLink(id: ID!): Link
}
`

const resolvers = { 
    Query: {
        info: () => `This is the API of a GraphQL Proyect Test`,
        feed: () => links,
        link: (parent, args) => {
            for (let i = 0; i<links.length;i++) {
                if ( links[i].id == args.id) {
                    return links[i];
                } 
            }
            return null;
        },
    },
    Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url
    },
    Mutation: { 
        post: (parent, args) => { 
            const link = { 
                id: `link-${idCount++}`, 
                description: args.description, 
                url: args.url,
            }
            links.push(link) 
            return link
        },
        updateLink: (parent, args) => {
            for (let i = 0; i<links.length;i++) {
                if ( links[i].id == args.id) {
                    let indice = i;
                    let link = links[i];
                    link.description = args.description;
                    link.url = args.url;
                    links[indice] = link;
                    return links[indice];
                } 
            }
            return null;
        },
        deleteLink: (parent, args) => {
            for (let i = 0; i<links.length;i++) {
                if ( links[i].id == args.id) {      
                    let linkDeleted = links.splice(i, 1);
                    return linkDeleted[0];
                }
            }
            return null;
        }
    },
}
const server = new GraphQLServer({
    typeDefs, 
    resolvers,
})

let idCount = 0;

let links = [
    { 
        id: 'link-0', 
        url: 'www.howtographql.com', 
        description: 'Fullstack tutorial for GraphQL' 
    },
    { 
        id: 'link-1', 
        url: 'www.grupoagni.com.ar', 
        description: 'GrupoAGNI ofitial website' 
    }
]

server.start(() => console.log(`Server is running on http://localhost:4000`))