import { BatchAddInstancesOption } from './BatchAddInstancesOption';


export class BatchAddScalingInstancesRequest {
    private 'scaling_group_id'?: string;
    public body?: BatchAddInstancesOption;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): BatchAddScalingInstancesRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withBody(body: BatchAddInstancesOption): BatchAddScalingInstancesRequest {
        this['body'] = body;
        return this;
    }
}