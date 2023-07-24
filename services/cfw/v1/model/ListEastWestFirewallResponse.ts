import { GetEastWestFirewallResponseBody } from './GetEastWestFirewallResponseBody';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListEastWestFirewallResponse extends SdkResponse {
    public data?: GetEastWestFirewallResponseBody;
    public constructor() { 
        super();
    }
    public withData(data: GetEastWestFirewallResponseBody): ListEastWestFirewallResponse {
        this['data'] = data;
        return this;
    }
}