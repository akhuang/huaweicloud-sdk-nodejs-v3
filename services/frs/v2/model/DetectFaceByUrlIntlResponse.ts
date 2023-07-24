import { DetectFace } from './DetectFace';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class DetectFaceByUrlIntlResponse extends SdkResponse {
    public faces?: Array<DetectFace>;
    public constructor() { 
        super();
    }
    public withFaces(faces: Array<DetectFace>): DetectFaceByUrlIntlResponse {
        this['faces'] = faces;
        return this;
    }
}