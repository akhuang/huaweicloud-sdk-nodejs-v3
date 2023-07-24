import { DetectFace } from './DetectFace';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class DetectFaceByBase64Response extends SdkResponse {
    public faces?: Array<DetectFace>;
    public constructor() { 
        super();
    }
    public withFaces(faces: Array<DetectFace>): DetectFaceByBase64Response {
        this['faces'] = faces;
        return this;
    }
}