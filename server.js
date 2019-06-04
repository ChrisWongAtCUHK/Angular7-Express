// server.js
const express = require('express'); 
const path = require('path'); 
const app = express(); 

var child_process = require('child_process');

function runCmd(cmd)
{
  var resp = child_process.execSync(cmd);
  var result = resp.toString('UTF8');
  return result;
}

// Serve static files…. 
app.use(express.static(__dirname + '/dist/angular7-express')); 
// Send all requests to index.html 
app.get('/', (req, res) => { res.sendFile(path.join(__dirname + '/dist/angular7-express/index.html')); });

app.get('/curl-test', (req, res) => { 
    
    var cmd = "curl https://y03vvyzq2v.sse.codesandbox.io/products/Zgz9gZE";  
    var result = runCmd(cmd);

    res.end(result); 
});

// default Heroku PORT 
app.listen(process.env.PORT || 3000);