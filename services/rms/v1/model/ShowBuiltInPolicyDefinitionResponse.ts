import { PolicyParameterDefinition } from './PolicyParameterDefinition';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBuiltInPolicyDefinitionResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'policy_type'?: string;
    public description?: string;
    private 'policy_rule_type'?: string;
    private 'policy_rule'?: object;
    private 'trigger_type'?: string;
    public keywords?: Array<string>;
    public parameters?: { [key: string]: PolicyParameterDefinition; };
    public constructor() { 
        super();
    }
    public withId(id: string): ShowBuiltInPolicyDefinitionResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowBuiltInPolicyDefinitionResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyType(policyType: string): ShowBuiltInPolicyDefinitionResponse {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: string  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): string | undefined {
        return this['policy_type'];
    }
    public withDescription(description: string): ShowBuiltInPolicyDefinitionResponse {
        this['description'] = description;
        return this;
    }
    public withPolicyRuleType(policyRuleType: string): ShowBuiltInPolicyDefinitionResponse {
        this['policy_rule_type'] = policyRuleType;
        return this;
    }
    public set policyRuleType(policyRuleType: string  | undefined) {
        this['policy_rule_type'] = policyRuleType;
    }
    public get policyRuleType(): string | undefined {
        return this['policy_rule_type'];
    }
    public withPolicyRule(policyRule: object): ShowBuiltInPolicyDefinitionResponse {
        this['policy_rule'] = policyRule;
        return this;
    }
    public set policyRule(policyRule: object  | undefined) {
        this['policy_rule'] = policyRule;
    }
    public get policyRule(): object | undefined {
        return this['policy_rule'];
    }
    public withTriggerType(triggerType: string): ShowBuiltInPolicyDefinitionResponse {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withKeywords(keywords: Array<string>): ShowBuiltInPolicyDefinitionResponse {
        this['keywords'] = keywords;
        return this;
    }
    public withParameters(parameters: { [key: string]: PolicyParameterDefinition; }): ShowBuiltInPolicyDefinitionResponse {
        this['parameters'] = parameters;
        return this;
    }
}