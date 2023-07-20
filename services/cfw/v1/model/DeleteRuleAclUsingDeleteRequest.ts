

export class DeleteRuleAclUsingDeleteRequest {
    private 'project_id'?: string;
    private 'acl_rule_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'fw_instance_id'?: string;
    public constructor(projectId?: string, aclRuleId?: string) { 
        this['project_id'] = projectId;
        this['acl_rule_id'] = aclRuleId;
    }
    public withProjectId(projectId: string): DeleteRuleAclUsingDeleteRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAclRuleId(aclRuleId: string): DeleteRuleAclUsingDeleteRequest {
        this['acl_rule_id'] = aclRuleId;
        return this;
    }
    public set aclRuleId(aclRuleId: string  | undefined) {
        this['acl_rule_id'] = aclRuleId;
    }
    public get aclRuleId(): string | undefined {
        return this['acl_rule_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteRuleAclUsingDeleteRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): DeleteRuleAclUsingDeleteRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
}