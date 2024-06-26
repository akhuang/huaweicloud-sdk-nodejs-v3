

export class DeleteInstanceRequest {
    private 'instance_id'?: number;
    public constructor(instanceId?: number) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: number): DeleteInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: number  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): number | undefined {
        return this['instance_id'];
    }
}