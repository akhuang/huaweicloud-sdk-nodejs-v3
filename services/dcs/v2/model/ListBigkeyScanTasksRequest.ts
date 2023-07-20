

export class ListBigkeyScanTasksRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public status?: ListBigkeyScanTasksRequestStatusEnum | string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListBigkeyScanTasksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListBigkeyScanTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBigkeyScanTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatus(status: ListBigkeyScanTasksRequestStatusEnum | string): ListBigkeyScanTasksRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListBigkeyScanTasksRequestStatusEnum {
    WAITING = 'waiting',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed'
}
