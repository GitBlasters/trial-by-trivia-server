'use strict';

// Dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const pg = require('pg');

// Setup
const PORT = process.env.PORT || 3000;
// Tom: This conString variable is setup for use with Windows systems
// const conString = process.env.DATABASE_URL;
const conString = 'postgres://fbcavlmjuozzsx:b32626afb2f6b1761bfbd794f7c83b55289530d491062ce9a7205e3f4658c56e@ec2-50-19-86-139.compute-1.amazonaws.com:5432/d5lldu7hfiii9q';

const client = new pg.Client(conString);

client.connect();
client.on('error', err => console.error(err));

// middleware
app.use(cors());

// Brandon: added get request for table user_data
app.get('/api/v1/user_data', (request, response) => {
  let SQL = `
    SELECT username, score 
    FROM user_data;
  `;

  client.query(SQL)
    .then(result => response.send(result.rows))
    .catch(console.error);
});

// Brandon: added post request for table user_data
app.post('/api/v1/user_data', (request, response) => {
  let {username, score} = request.body;

  let SQL = `INSERT INTO user_data(username, score) 
             VALUES($1, $2);`;

  let values = [username, score];

  client.query(SQL, values)
    .then(() => response.sendStatus(201))
    .catch(console.error);
});

app.listen(PORT, () => console.log(`Port ${PORT} engaged`));