import { ListInstancesResult } from './ListInstancesResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesResponse extends SdkResponse {
    public instances?: Array<ListInstancesResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<ListInstancesResult>): ListInstancesResponse {
        this['instances'] = instances;
        return this;
    }
    public withTotalCount(totalCount: number): ListInstancesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}