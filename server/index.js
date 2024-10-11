/* const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const morgan = require('morgan');
const connectDB = require('./config/database');
dotenv.config();
const app = express();

connectDB();
app.use(cors())
app.use(express.json)
app.use(morgan('dev'))
//app.use(express.static('public'));

//app.use('/auth', require("./routes/authRoutes"))
app.use('/test', require("./routes/testRoutes"))
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
const PORT = 8000;
app.listen(PORT, function () {
console.log(`Running on port ${PORT}`);
});
 */
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const morgan = require('morgan');
dotenv.config();
const app = express();
const connectDB = require('./config/database');


connectDB();
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
//app.use(express.static('public'));

app.use('/admin', require("./routes/adminRoutes"))
app.use('/auth', require("./routes/authRoutes"))
app.use('/donor', require("./routes/donorRoutes"))
app.use('/consumer',require("./routes/consumerRoutes"))


app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
const PORT = 4000;
app.listen(PORT, function () {
console.log(`Running on port ${PORT}`);
});
