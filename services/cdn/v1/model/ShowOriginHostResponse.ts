import { DomainOriginHost } from './DomainOriginHost';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOriginHostResponse extends SdkResponse {
    private 'origin_host'?: DomainOriginHost | undefined;
    public constructor() { 
        super();
    }
    public withOriginHost(originHost: DomainOriginHost): ShowOriginHostResponse {
        this['origin_host'] = originHost;
        return this;
    }
    public set originHost(originHost: DomainOriginHost | undefined) {
        this['origin_host'] = originHost;
    }
    public get originHost() {
        return this['origin_host'];
    }
}