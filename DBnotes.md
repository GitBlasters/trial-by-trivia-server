CREATE DATABASE trial_by_trivia;


CREATE TABLE table_by_trivia 
(id SERIAL PRIMARY KEY,
name VARCHAR(15), 
highScore INT,
totalScore INT, 
timesPlayed INT);

CREATE TABLE table_by_trivia (id SERIAL PRIMARY KEY, name VARCHAR(15), highScore INT, totalScore INT, timesPlayed INT);