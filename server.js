const express = require('express');
const ChartController = require('./src/controllers/ChartController');

const app = express();
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/', ChartController.renderChart);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });

