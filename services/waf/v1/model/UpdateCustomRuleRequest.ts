import { UpdateCustomRuleRequestBody } from './UpdateCustomRuleRequestBody';


export class UpdateCustomRuleRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    private 'policy_id'?: string;
    private 'rule_id'?: string;
    public body?: UpdateCustomRuleRequestBody;
    public constructor(contentType?: string, policyId?: string, ruleId?: string) { 
        this['Content-Type'] = contentType;
        this['policy_id'] = policyId;
        this['rule_id'] = ruleId;
    }
    public withContentType(contentType: string): UpdateCustomRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateCustomRuleRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPolicyId(policyId: string): UpdateCustomRuleRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withRuleId(ruleId: string): UpdateCustomRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withBody(body: UpdateCustomRuleRequestBody): UpdateCustomRuleRequest {
        this['body'] = body;
        return this;
    }
}