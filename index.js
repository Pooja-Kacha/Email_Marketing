const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema, root } = require('./graphql');  

const app = express();


app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,  
}));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/graphql`);
});
