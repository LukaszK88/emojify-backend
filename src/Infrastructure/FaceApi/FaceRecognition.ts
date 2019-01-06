import { canvas, faceapi, faceDetectionNet, faceDetectionOptions, saveFile } from './Commons';

const MODELS_PATH = './src/Infrastructure/FaceApi/Models';

class FaceRecognition {

  async faceExpression() {
    await faceDetectionNet.loadFromDisk(MODELS_PATH);
    await faceapi.nets.faceExpressionNet.loadFromDisk(MODELS_PATH);

    const img = await canvas.loadImage('./src/resources/images/face.jpg');
    const results = await faceapi.detectAllFaces(img, faceDetectionOptions)
      .withFaceExpressions();

    const out = faceapi.createCanvasFromMedia(img) as any;
    faceapi.drawDetection(out, results.map(res => res.detection), { withScore: false });
    faceapi.drawFaceExpressions(out, results.map(({ detection, expressions }) => ({ position: detection.box, expressions })));

    saveFile('faceExpressionRecognition.jpg', out.toBuffer('image/jpeg'));
    console.log('done, saved results to out/faceExpressionRecognition.jpg')
    return results;
  }

  async detectAllFaces() {
    await faceDetectionNet.loadFromDisk(MODELS_PATH);

    const img = await canvas.loadImage('./src/resources/images/face.jpg');
    const detections = await faceapi.detectAllFaces(img, faceDetectionOptions);
    const out = faceapi.createCanvasFromMedia(img) as any;
    faceapi.drawDetection(out, detections);

    saveFile('faceDetection.jpg', out.toBuffer('image/jpeg'));
    console.log('done, saved results to out/faceDetection.jpg')
  }

}

const faceRecognition = new FaceRecognition();

export default faceRecognition;
