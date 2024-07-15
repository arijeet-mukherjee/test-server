const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
// const WebSocketManager = require('./_middleware/websocketManager');
// const wssManager = new WebSocketManager(server);
const cors = require('cors');

app.use(cors({origin : "*"}));


app.post('/api', (req, res) => {
    res.send('Hello World ${req.body}');
    return;
});
app.get('/api', (req, res) => {
    res.send('Hello World');
    return;
});

server.listen(3000, () => {
    console.log(`App listening on port 3000!`);
});
