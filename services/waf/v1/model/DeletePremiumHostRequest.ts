

export class DeletePremiumHostRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    private 'host_id'?: string;
    public keepPolicy?: boolean;
    public constructor(contentType?: string, hostId?: string) { 
        this['Content-Type'] = contentType;
        this['host_id'] = hostId;
    }
    public withContentType(contentType: string): DeletePremiumHostRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeletePremiumHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostId(hostId: string): DeletePremiumHostRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withKeepPolicy(keepPolicy: boolean): DeletePremiumHostRequest {
        this['keepPolicy'] = keepPolicy;
        return this;
    }
}