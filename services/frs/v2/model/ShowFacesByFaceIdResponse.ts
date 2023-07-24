import { FaceSetFace } from './FaceSetFace';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowFacesByFaceIdResponse extends SdkResponse {
    private 'face_set_id'?: string | undefined;
    private 'face_set_name'?: string | undefined;
    public faces?: Array<FaceSetFace>;
    public constructor() { 
        super();
    }
    public withFaceSetId(faceSetId: string): ShowFacesByFaceIdResponse {
        this['face_set_id'] = faceSetId;
        return this;
    }
    public set faceSetId(faceSetId: string | undefined) {
        this['face_set_id'] = faceSetId;
    }
    public get faceSetId() {
        return this['face_set_id'];
    }
    public withFaceSetName(faceSetName: string): ShowFacesByFaceIdResponse {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withFaces(faces: Array<FaceSetFace>): ShowFacesByFaceIdResponse {
        this['faces'] = faces;
        return this;
    }
}