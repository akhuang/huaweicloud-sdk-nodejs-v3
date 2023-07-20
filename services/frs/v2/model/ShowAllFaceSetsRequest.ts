

export class ShowAllFaceSetsRequest {
    private 'Enterprise-Project-Id'?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowAllFaceSetsRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
}