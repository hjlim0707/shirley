const Server = require('./Server.js');
const express = require('express');
const port = (process.env.PORT || 3000)
const app = Server.app();

app = express();
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});
