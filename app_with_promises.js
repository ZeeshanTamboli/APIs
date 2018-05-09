const express = require('express');
const app = express();

//Require files
const {
  addition,
  subtraction,
  multiplication,
  division,
  square
} = require('./mathFunctionsWithPromises');

//Hello World GET API
app.get('/learn/hellopost', (req, res) => {
  res.send('Hello World');
});

//POST API
app.post('/learn/hellopost/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name}`);
});

//POST return addition
app.post('/learn/addition/:numberOne/:numberTwo', (req, res) => {
  const numberOne = parseInt(req.params.numberOne),
    numberTwo = parseInt(req.params.numberTwo),
    result = numberOne + numberTwo;

  res.json({ result });
});

//Promise in POST api addtion
app.post('/learn/addition/promises/:numberOne/:numberTwo', (req, res) => {
  const numberOne = parseInt(req.params.numberOne),
    numberTwo = parseInt(req.params.numberTwo);

  addition(numberOne, numberTwo)
    .then(result => res.send(result))
    .catch(e => res.send(e));
});

//Promise chaining
app.get('/learn/mathOp/promises/:numberOne/:numberTwo', (req, res) => {
  const numberOne = parseInt(req.params.numberOne),
    numberTwo = parseInt(req.params.numberTwo);

  addition(numberOne, numberTwo)
    .then(additionRes => {
      console.log(additionRes);
      return subtraction(numberOne, numberTwo);
    })
    .then(subtractionRes => {
      console.log(subtractionRes);
      return multiplication(numberOne, numberTwo);
    })
    .then(multiplicationRes => {
      console.log(multiplicationRes);
      return division(numberOne, numberTwo);
    })
    .then(divisionRes => console.log(divisionRes))
    .catch(e => res.send(e));
});

//Square a number
app.get('/learn/square', (req, res) => {
  square().then(result => res.json({ result }));
});

//Listen for port
const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
