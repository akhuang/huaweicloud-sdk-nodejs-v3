import { WhitelistResp } from './WhitelistResp';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class CreateWhitelistResponse extends SdkResponse {
    public whitelist?: WhitelistResp;
    public constructor() { 
        super();
    }
    public withWhitelist(whitelist: WhitelistResp): CreateWhitelistResponse {
        this['whitelist'] = whitelist;
        return this;
    }
}