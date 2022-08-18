import { createServer } from 'http';

const server = createServer((message) => {
    console.log("A message just came in!");
});
server.listen(80);