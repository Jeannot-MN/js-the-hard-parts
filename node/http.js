import { createServer } from 'http';
import net from 'net';

const server = createServer((req, res) => {
    console.log("A message just came in!");

    // console.log(req, res);

    res.write("Hello");
    res.end();
});

server.listen(80);