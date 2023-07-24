import { FaceSetFace } from './FaceSetFace';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class AddFacesByUrlResponse extends SdkResponse {
    private 'face_set_id'?: string | undefined;
    private 'face_set_name'?: string | undefined;
    public faces?: Array<FaceSetFace>;
    public constructor() { 
        super();
    }
    public withFaceSetId(faceSetId: string): AddFacesByUrlResponse {
        this['face_set_id'] = faceSetId;
        return this;
    }
    public set faceSetId(faceSetId: string | undefined) {
        this['face_set_id'] = faceSetId;
    }
    public get faceSetId() {
        return this['face_set_id'];
    }
    public withFaceSetName(faceSetName: string): AddFacesByUrlResponse {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withFaces(faces: Array<FaceSetFace>): AddFacesByUrlResponse {
        this['faces'] = faces;
        return this;
    }
}