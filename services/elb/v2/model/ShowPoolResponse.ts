import { PoolResp } from './PoolResp';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowPoolResponse extends SdkResponse {
    public pool?: PoolResp;
    public constructor() { 
        super();
    }
    public withPool(pool: PoolResp): ShowPoolResponse {
        this['pool'] = pool;
        return this;
    }
}