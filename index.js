require('dotenv').config();

const server = require('./server');

const port = process.env.PORT || 9111;

server.listen(port, () => {
  console.log(`\n=== Web API Listening on === \n=== http://localhost:${port} ===\n`);
});

