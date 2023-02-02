import { ActionResources } from './ActionResources';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceInstancesResponse extends SdkResponse {
    public resources?: Array<ActionResources>;
    private 'total_count'?: number | undefined;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<ActionResources>): ListResourceInstancesResponse {
        this['resources'] = resources;
        return this;
    }
    public withTotalCount(totalCount: number): ListResourceInstancesResponse {
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