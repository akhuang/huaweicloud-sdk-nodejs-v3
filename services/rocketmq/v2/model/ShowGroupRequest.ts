

export class ShowGroupRequest {
    private 'instance_id'?: string;
    public group?: string;
    public constructor(instanceId?: string, group?: string) { 
        this['instance_id'] = instanceId;
        this['group'] = group;
    }
    public withInstanceId(instanceId: string): ShowGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroup(group: string): ShowGroupRequest {
        this['group'] = group;
        return this;
    }
}