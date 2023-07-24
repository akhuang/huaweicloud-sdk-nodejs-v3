import { ConnectionEndpoints } from './ConnectionEndpoints';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListServiceConnectionsResponse extends SdkResponse {
    public connections?: Array<ConnectionEndpoints>;
    private 'total_count'?: number | undefined;
    public constructor() { 
        super();
    }
    public withConnections(connections: Array<ConnectionEndpoints>): ListServiceConnectionsResponse {
        this['connections'] = connections;
        return this;
    }
    public withTotalCount(totalCount: number): ListServiceConnectionsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
}