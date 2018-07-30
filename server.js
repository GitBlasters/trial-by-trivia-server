'use strict';

// Dependencies
const express = require('express');
const pg = require('pg');
const cors = require('cors');

// Setup
// Tom: This conString variable is setup for use with Windows systems
const conString = process.env.DATABASE_URL || 'postgres://postgres:1234@localhost:5432/trial_by_trivia';
const app = express();
const PORT = process.env.PORT || 3000;
const client = new pg.Client(conString);

client.connect();
client.on('error', err => console.error(err));

// middleware
app.use(cors());




app.listen(PORT, () => console.log(`Port ${PORT} engaged`));