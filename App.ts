import "reflect-metadata";
import express from 'express';
import bodyParser from 'body-parser';
import {useExpressServer, useContainer as routingUseContainer, Action} from "routing-controllers";
import {FaceRecognition} from "./src/application/FaceRecognition/FaceRecognition";

(global as any).fetch = require('node-fetch');

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

useExpressServer(app,{
  routePrefix: "/api",
  controllers: [FaceRecognition]
}).listen(port);