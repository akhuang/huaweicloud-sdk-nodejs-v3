import { PublicipSingleShowResp } from './PublicipSingleShowResp';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowPublicipResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public publicip?: PublicipSingleShowResp;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowPublicipResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withPublicip(publicip: PublicipSingleShowResp): ShowPublicipResponse {
        this['publicip'] = publicip;
        return this;
    }
}