import { canvas, faceapi, faceDetectionNet, faceDetectionOptions, saveFile } from './Commons';

const MODELS_PATH = './src/Infrastructure/FaceApi/Models';

class FaceRecognition {


  private getExpression() {

  }

  async faceExpression() {
    await faceDetectionNet.loadFromDisk(MODELS_PATH);
    await faceapi.nets.faceExpressionNet.loadFromDisk(MODELS_PATH);

    const img = await canvas.loadImage('https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10868132_10152610968255913_3496260210928457827_n.jpg?_nc_cat=103&_nc_ht=scontent-lht6-1.xx&oh=8185a238e4c45c866d5451a16bd8ff21&oe=5C8F09CF');
    const results = await faceapi.detectSingleFace(img, faceDetectionOptions)
      .withFaceExpressions();

    return {
      ...results,
    }
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
