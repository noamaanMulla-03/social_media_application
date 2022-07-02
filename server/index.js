import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

const MONGO_CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.jq6q8.mongodb.net/?retryWrites=true&w=majority`;

const CONNECTION_PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(CONNECTION_PORT, () => console.log(`\n[-] Server running on port ${CONNECTION_PORT}...\n`)))
    .catch(err => console.log(`\n[-] Error connecting to database: ${err}\n`));
