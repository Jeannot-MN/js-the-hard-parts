import { createServer } from 'http';

const server = createServer((req, res) => {
    console.log("A message just came in!");

    // console.log(req, res);

    res.write("Hello");
    res.end();
});

server.listen(80);