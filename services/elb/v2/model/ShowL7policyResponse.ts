import { L7policyResp } from './L7policyResp';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowL7policyResponse extends SdkResponse {
    public l7policy?: L7policyResp;
    public constructor() { 
        super();
    }
    public withL7policy(l7policy: L7policyResp): ShowL7policyResponse {
        this['l7policy'] = l7policy;
        return this;
    }
}