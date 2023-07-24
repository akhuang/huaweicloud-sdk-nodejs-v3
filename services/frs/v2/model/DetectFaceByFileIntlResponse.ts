import { DetectFace } from './DetectFace';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class DetectFaceByFileIntlResponse extends SdkResponse {
    public faces?: Array<DetectFace>;
    public constructor() { 
        super();
    }
    public withFaces(faces: Array<DetectFace>): DetectFaceByFileIntlResponse {
        this['faces'] = faces;
        return this;
    }
}