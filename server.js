// server.js
const jsonServer = require('json-server');
const fs = require('fs');
const path = require('path');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Read db.json file into memory
const dbFilePath = path.join(__dirname, 'db.json');
const dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'));

const router = jsonServer.router(dbData);

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

