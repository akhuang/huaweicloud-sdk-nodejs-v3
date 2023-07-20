import { ChangeProtectStatusRequestBody } from './ChangeProtectStatusRequestBody';


export class ChangeEwProtectStatusRequest {
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'fw_instance_id'?: string;
    public body?: ChangeProtectStatusRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ChangeEwProtectStatusRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeEwProtectStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ChangeEwProtectStatusRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withBody(body: ChangeProtectStatusRequestBody): ChangeEwProtectStatusRequest {
        this['body'] = body;
        return this;
    }
}