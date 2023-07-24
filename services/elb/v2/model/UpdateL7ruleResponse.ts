import { L7ruleResp } from './L7ruleResp';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class UpdateL7ruleResponse extends SdkResponse {
    public rule?: L7ruleResp;
    public constructor() { 
        super();
    }
    public withRule(rule: L7ruleResp): UpdateL7ruleResponse {
        this['rule'] = rule;
        return this;
    }
}