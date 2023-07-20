import { FaceDetectBase64Req } from './FaceDetectBase64Req';


export class DetectFaceByBase64Request {
    private 'Enterprise-Project-Id'?: string;
    public body?: FaceDetectBase64Req;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectFaceByBase64Request {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: FaceDetectBase64Req): DetectFaceByBase64Request {
        this['body'] = body;
        return this;
    }
}