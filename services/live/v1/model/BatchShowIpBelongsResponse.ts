import { CdnIp } from './CdnIp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchShowIpBelongsResponse extends SdkResponse {
    private 'cdn_ips'?: Array<CdnIp>;
    public constructor() { 
        super();
    }
    public withCdnIps(cdnIps: Array<CdnIp>): BatchShowIpBelongsResponse {
        this['cdn_ips'] = cdnIps;
        return this;
    }
    public set cdnIps(cdnIps: Array<CdnIp>  | undefined) {
        this['cdn_ips'] = cdnIps;
    }
    public get cdnIps(): Array<CdnIp> | undefined {
        return this['cdn_ips'];
    }
}