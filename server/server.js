const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const adminRouter = require('./api/admin/routes')
const authRouter = require('./api/auth/routes');
const postRouter = require('./api/posts/routes');
const expressSession = require('express-session');
const admin = require('firebase-admin');
const cors = require('cors');

const startUp = async() => {
    try {
        const app = express();

        // await mongoose.connect('mongodb://localhost:27017/games-series');
        const dbRoute = 'mongodb://megawiki:aptx4869@ds125945.mlab.com:25945/megawiki';

        await mongoose.connect(dbRoute, { useNewUrlParser: true });
        let db = mongoose.connection;
        db.once("open", () => console.log("Connected to the database"));
        db.on("error", console.error.bind(console, "MongoDB connection error:"));
        
        const admin = require("firebase-admin");

        const serviceAccount = require("./series-web-firebase-adminsdk-llwbr-27eea3fa3a");
            admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://series-web.firebaseio.com"
        });

        app.use(cors({
            origin: ['http://localhost:3001', 'http://localhost:3000'],
            credentials: true,
        }));
        app.use(expressSession({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: true,
            // cookie: { secure: true }
          }));
        app.use(bodyParser.urlencoded({ extended: false } ));
        app.use(bodyParser.json());
        app.use('/api/admin', adminRouter);
        app.use('/api/posts', postRouter);
        app.use('/api/auth', authRouter);
          
        //start server
        await app.listen(process.env.PORT || 3001);
        console.log(`server listens on port ${process.env.PORT || 3001}...`)
    } catch (error) {
        console.log('Error happens: ',error);
    }
}

startUp();