const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Fazzke! Supertümpel!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

//https://aws.amazon.com/getting-started/hands-on/create-continuous-delivery-pipeline/module-two/?e=gs2020&p=cicd-one