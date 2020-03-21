const http = require('http');
http.createServer((req, res) => {

        res.writeHead(200), { 'Content-Type': 'aplication/json' };
        let salida = {
            nombre: 'Mario',
            edad: 32,
            ulr: req.url
        }
        res.write(JSON.stringify(salida))
        res.end();
    })
    .listen(8082);

console.log('Puerto 8082');