
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateOpenSourceStrategyResponse extends SdkResponse {
    public status?: boolean;
    private 'rule_template_instance_id'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: boolean): UpdateOpenSourceStrategyResponse {
        this['status'] = status;
        return this;
    }
    public withRuleTemplateInstanceId(ruleTemplateInstanceId: string): UpdateOpenSourceStrategyResponse {
        this['rule_template_instance_id'] = ruleTemplateInstanceId;
        return this;
    }
    public set ruleTemplateInstanceId(ruleTemplateInstanceId: string  | undefined) {
        this['rule_template_instance_id'] = ruleTemplateInstanceId;
    }
    public get ruleTemplateInstanceId(): string | undefined {
        return this['rule_template_instance_id'];
    }
}