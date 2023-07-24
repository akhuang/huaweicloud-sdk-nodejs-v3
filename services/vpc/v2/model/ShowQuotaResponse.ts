import { Quota } from './Quota';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotaResponse extends SdkResponse {
    public quotas?: Quota;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Quota): ShowQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
}