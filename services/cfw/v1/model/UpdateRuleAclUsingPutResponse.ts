import { RuleId } from './RuleId';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class UpdateRuleAclUsingPutResponse extends SdkResponse {
    public data?: RuleId;
    public constructor() { 
        super();
    }
    public withData(data: RuleId): UpdateRuleAclUsingPutResponse {
        this['data'] = data;
        return this;
    }
}