import dotenv from "dotenv";
import express from 'express';
const app = express();

// initialize configuration
dotenv.config();

app.get('/', (req, res) => res.send(process.env.APP_DESCRIPTOR));

const port = process.env.SERVER_PORT;
app.listen(port, () => console.log(`App listening on port ${port}!`));
