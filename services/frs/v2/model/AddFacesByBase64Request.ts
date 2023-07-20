import { AddFacesBase64Req } from './AddFacesBase64Req';


export class AddFacesByBase64Request {
    private 'Enterprise-Project-Id'?: string;
    private 'face_set_name'?: string;
    public body?: AddFacesBase64Req;
    public constructor(faceSetName?: string) { 
        this['face_set_name'] = faceSetName;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddFacesByBase64Request {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withFaceSetName(faceSetName: string): AddFacesByBase64Request {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string  | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName(): string | undefined {
        return this['face_set_name'];
    }
    public withBody(body: AddFacesBase64Req): AddFacesByBase64Request {
        this['body'] = body;
        return this;
    }
}