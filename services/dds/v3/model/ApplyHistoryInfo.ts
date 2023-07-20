

export class ApplyHistoryInfo {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'applied_at'?: string;
    private 'apply_result'?: string;
    private 'failure_reason'?: string;
    public constructor(instanceId?: string, instanceName?: string, appliedAt?: string, applyResult?: string) { 
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['applied_at'] = appliedAt;
        this['apply_result'] = applyResult;
    }
    public withInstanceId(instanceId: string): ApplyHistoryInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ApplyHistoryInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withAppliedAt(appliedAt: string): ApplyHistoryInfo {
        this['applied_at'] = appliedAt;
        return this;
    }
    public set appliedAt(appliedAt: string  | undefined) {
        this['applied_at'] = appliedAt;
    }
    public get appliedAt(): string | undefined {
        return this['applied_at'];
    }
    public withApplyResult(applyResult: string): ApplyHistoryInfo {
        this['apply_result'] = applyResult;
        return this;
    }
    public set applyResult(applyResult: string  | undefined) {
        this['apply_result'] = applyResult;
    }
    public get applyResult(): string | undefined {
        return this['apply_result'];
    }
    public withFailureReason(failureReason: string): ApplyHistoryInfo {
        this['failure_reason'] = failureReason;
        return this;
    }
    public set failureReason(failureReason: string  | undefined) {
        this['failure_reason'] = failureReason;
    }
    public get failureReason(): string | undefined {
        return this['failure_reason'];
    }
}