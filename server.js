const express = require('express');
const  cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://localhost:8081',
};


// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
const routerProduct = require('./routes/productRouter');
app.use('/api/products', routerProduct);   

const routerUser = require('./routes/userRouter');
app.use('/api/users', routerUser);   

// api
app.get('/', (req, res) => {
    res.json({ message: 'Hello world'})
});

// port
const PORT = 8080;

// server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

