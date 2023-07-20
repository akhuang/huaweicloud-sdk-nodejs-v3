

export class ListDiagnosisTasksRequest {
    private 'instance_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListDiagnosisTasksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ListDiagnosisTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDiagnosisTasksRequest {
        this['offset'] = offset;
        return this;
    }
}