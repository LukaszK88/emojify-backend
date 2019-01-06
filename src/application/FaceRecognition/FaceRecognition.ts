import {Controller, Get} from "routing-controllers";
import faceApi from "../../Infrastructure/FaceApi/FaceApi";


@Controller("/v1/face")
export class FaceRecognition {

  @Get('/')
  async getAll() {

     return await faceApi.detectFaceExpression(null);

  };

}
