const { buildSchema } = require('graphql');

// Define your schema
const schema = buildSchema(`
    type car{
    id :ID!
    name : String!
    model : String!
    price: Float
    }

   type Query {
    getCarById(id: ID!): car
    getAllCars: [car]
  }
    type Mutation {
   createCar(name: String!, model: String!, price: Float!): car
    }

`);

const cars = [
    { id: '1', name: 'Toyota', model: 'Corolla', price: 20000 },
    { id: '2', name: 'Honda', model: 'Civic', price: 25000 },
];

const root = {
    getCarById: ({ id }) => {
        return cars.find(car => car.id === id);
    },
    getAllCars: () => {
        return cars;
    },
    createCar: ({ name, model, price }) => {
        const newCar = { id: String(cars.length + 1), name, model, price };
        cars.push(newCar);
        return newCar;
    }
};

module.exports = { schema, root };
