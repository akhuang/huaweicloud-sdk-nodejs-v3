import { RefererRsp } from './RefererRsp';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowReferResponse extends SdkResponse {
    public referer?: RefererRsp;
    public constructor() { 
        super();
    }
    public withReferer(referer: RefererRsp): ShowReferResponse {
        this['referer'] = referer;
        return this;
    }
}