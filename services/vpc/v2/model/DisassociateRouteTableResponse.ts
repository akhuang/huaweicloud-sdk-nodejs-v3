import { RouteTableResp } from './RouteTableResp';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class DisassociateRouteTableResponse extends SdkResponse {
    public routetable?: RouteTableResp;
    public constructor() { 
        super();
    }
    public withRoutetable(routetable: RouteTableResp): DisassociateRouteTableResponse {
        this['routetable'] = routetable;
        return this;
    }
}