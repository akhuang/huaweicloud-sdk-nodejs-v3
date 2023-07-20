

export class ShowFlowLogRequest {
    private 'flowlog_id'?: string;
    public constructor(flowlogId?: string) { 
        this['flowlog_id'] = flowlogId;
    }
    public withFlowlogId(flowlogId: string): ShowFlowLogRequest {
        this['flowlog_id'] = flowlogId;
        return this;
    }
    public set flowlogId(flowlogId: string  | undefined) {
        this['flowlog_id'] = flowlogId;
    }
    public get flowlogId(): string | undefined {
        return this['flowlog_id'];
    }
}