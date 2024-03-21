import { ChangeVulStatusRequestInfo } from './ChangeVulStatusRequestInfo';


export class ChangeVulStatusRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public body?: ChangeVulStatusRequestInfo;
    public constructor() { 
    }
    public withContentType(contentType: string): ChangeVulStatusRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeVulStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ChangeVulStatusRequestInfo): ChangeVulStatusRequest {
        this['body'] = body;
        return this;
    }
}