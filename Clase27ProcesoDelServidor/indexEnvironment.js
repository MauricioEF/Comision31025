import express from 'express';
import config from './config/config.js';

const app = express();
console.log(config.app);
app.listen(config.app.PORT,console.log(`Listening on PORT ${config.app.PORT}`))