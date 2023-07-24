import { Quota } from './Quota';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowImageQuotaResponse extends SdkResponse {
    public quotas?: Quota;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Quota): ShowImageQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
}