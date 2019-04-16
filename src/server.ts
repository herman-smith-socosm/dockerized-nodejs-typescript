import dotenv from "dotenv";
import express from 'express';
const app = express();

// initialize configuration
dotenv.config();

app.get('/', (req, res) => res.send(process.env.APP_DESCRIPTOR));
app.get('/.well-known/acme-challenge/:filename', (req, res) => {
    const filename = req.params.filename;

    res.attachment(filename);
    res.type('txt');
    res.send(process.env.ACME_CHALLENGE);
});

const port = process.env.SERVER_PORT;
app.listen(port, () => console.log(`App listening on port ${port}!`));
