const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/src'));

app.get('/', (req, res) => {
  console.log(__dirname + '/src/index.html');
  res.sendFile(__dirname + '/src/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})