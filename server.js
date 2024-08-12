const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
// const WebSocketManager = require('./_middleware/websocketManager');
// const wssManager = new WebSocketManager(server);
const cors = require('cors');

app.use(cors({origin : "*"}));

app.post('/api', (req, res) => {
    console.log(">>>>>>>>>>>>>", req.body);
    res.send('Hello World.. Got event' + req.body);
    const githubEvent = req.headers['x-github-event'];
    
      if (githubEvent === 'issues') {
        const data = req.body;
        const action = data.action;
          console.log(data , action);
        if (action === 'opened') {
          console.log(`An issue was opened with this title: ${data.issue.title}`);
        } else if (action === 'closed') {
          console.log(`An issue was closed by ${data.issue.user.login}`);
        } else {
          console.log(`Unhandled action for the issue event: ${action}`);
        }
      } else if (githubEvent === 'ping') {
        console.log('GitHub sent the ping event');
      } else {
        console.log(`Unhandled event: ${githubEvent}`);
      }
    console.log(">>>>>>>>>>>>>")
    return;
});

app.get('/api', (req, res) => {
    res.send('Hello World ${req.body}' + req.body);
    return;
});

server.listen(3000, () => {
    console.log(`App listening on port 3000!`);
});
