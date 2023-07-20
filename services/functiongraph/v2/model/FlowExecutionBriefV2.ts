

export class FlowExecutionBriefV2 {
    private 'workflow_id'?: string;
    private 'execution_id'?: string;
    public status?: FlowExecutionBriefV2StatusEnum | string;
    private 'begin_time'?: Date;
    private 'end_time'?: Date;
    private 'last_update_time'?: Date;
    private 'created_by'?: string;
    private 'workflow_urn'?: string;
    public constructor() { 
    }
    public withWorkflowId(workflowId: string): FlowExecutionBriefV2 {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withExecutionId(executionId: string): FlowExecutionBriefV2 {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withStatus(status: FlowExecutionBriefV2StatusEnum | string): FlowExecutionBriefV2 {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: Date): FlowExecutionBriefV2 {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: Date  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): Date | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: Date): FlowExecutionBriefV2 {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withLastUpdateTime(lastUpdateTime: Date): FlowExecutionBriefV2 {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: Date  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): Date | undefined {
        return this['last_update_time'];
    }
    public withCreatedBy(createdBy: string): FlowExecutionBriefV2 {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withWorkflowUrn(workflowUrn: string): FlowExecutionBriefV2 {
        this['workflow_urn'] = workflowUrn;
        return this;
    }
    public set workflowUrn(workflowUrn: string  | undefined) {
        this['workflow_urn'] = workflowUrn;
    }
    public get workflowUrn(): string | undefined {
        return this['workflow_urn'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FlowExecutionBriefV2StatusEnum {
    SUCCESS = 'success',
    FAIL = 'fail',
    RUNNING = 'running',
    TIMEOUT = 'timeout',
    CANCEL = 'cancel',
    SCHEDULED = 'scheduled',
    RECOVERED = 'recovered',
    RETRYING = 'retrying',
    STOPPING = 'stopping'
}
