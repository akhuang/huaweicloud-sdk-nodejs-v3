import { FaceCompareUrlReq } from './FaceCompareUrlReq';


export class CompareFaceByUrlRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: FaceCompareUrlReq;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CompareFaceByUrlRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: FaceCompareUrlReq): CompareFaceByUrlRequest {
        this['body'] = body;
        return this;
    }
}