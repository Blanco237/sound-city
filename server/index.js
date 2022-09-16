const express = require("express");
const cors = require('cors');
require('dotenv').config();

const app = express();



app.use(express.json());
app.use(cors());

/*Database Import*/
const db = require('./models');

/*Router Import*/
const userRouter = require('./routes/Users');
app.use('/users', userRouter);


const port = process.env.PORT || 5000;
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on ${port}`)
    })
})