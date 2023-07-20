import { FaceDetectUrlReq } from './FaceDetectUrlReq';


export class DetectFaceByUrlIntlRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: FaceDetectUrlReq;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectFaceByUrlIntlRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: FaceDetectUrlReq): DetectFaceByUrlIntlRequest {
        this['body'] = body;
        return this;
    }
}