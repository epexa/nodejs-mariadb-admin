const address = '127.0.0.1';
const port = 80;

const express = require('express');
const app = express();

const mysqlAdmin = require('node-mysql-admin');
app.use(mysqlAdmin(app));

// remove from header "X-Powered-By: Express"
app.disable('x-powered-by');

const server = app.listen(port, address, () => {
	console.log(`Node.js MariaDB Admin running at http://${server.address().address}:${server.address().port}`);
});
