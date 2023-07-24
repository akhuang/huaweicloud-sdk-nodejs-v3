import { PublicipCreateResp } from './PublicipCreateResp';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class CreatePublicipResponse extends SdkResponse {
    public publicip?: PublicipCreateResp;
    public constructor() { 
        super();
    }
    public withPublicip(publicip: PublicipCreateResp): CreatePublicipResponse {
        this['publicip'] = publicip;
        return this;
    }
}