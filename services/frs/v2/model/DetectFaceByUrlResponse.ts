import { DetectFace } from './DetectFace';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class DetectFaceByUrlResponse extends SdkResponse {
    public faces?: Array<DetectFace>;
    public constructor() { 
        super();
    }
    public withFaces(faces: Array<DetectFace>): DetectFaceByUrlResponse {
        this['faces'] = faces;
        return this;
    }
}