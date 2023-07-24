import { RouteTable } from './RouteTable';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowRouteTableResponse extends SdkResponse {
    private 'route_table'?: RouteTable | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRouteTable(routeTable: RouteTable): ShowRouteTableResponse {
        this['route_table'] = routeTable;
        return this;
    }
    public set routeTable(routeTable: RouteTable | undefined) {
        this['route_table'] = routeTable;
    }
    public get routeTable() {
        return this['route_table'];
    }
    public withRequestId(requestId: string): ShowRouteTableResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}