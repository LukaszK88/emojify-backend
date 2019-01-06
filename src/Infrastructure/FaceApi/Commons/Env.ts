import * as faceapi from 'face-api.js';
import '@tensorflow/tfjs-node';
import * as canvas from 'canvas';

const { Canvas, Image, ImageData }:any = canvas;
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

export { canvas, faceapi }
