import { InstancesResult } from './InstancesResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRestorableInstancesResponse extends SdkResponse {
    public instances?: Array<InstancesResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<InstancesResult>): ListRestorableInstancesResponse {
        this['instances'] = instances;
        return this;
    }
    public withTotalCount(totalCount: number): ListRestorableInstancesResponse {
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