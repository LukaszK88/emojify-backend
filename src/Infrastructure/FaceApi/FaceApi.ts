import faceRecognition from "./FaceRecognition";

class FaceApi {

  async detectFace(image:any) {

    const description = await faceRecognition.detectAllFaces();
    console.log(description);
  }

  async detectFaceExpression(image:any) {

    const results = await faceRecognition.faceExpression();
    return results;
  }

}

const faceApi = new FaceApi();

export default faceApi;
