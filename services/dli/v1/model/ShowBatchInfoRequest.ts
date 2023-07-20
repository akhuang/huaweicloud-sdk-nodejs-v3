

export class ShowBatchInfoRequest {
    private 'batch_id'?: string;
    public constructor(batchId?: string) { 
        this['batch_id'] = batchId;
    }
    public withBatchId(batchId: string): ShowBatchInfoRequest {
        this['batch_id'] = batchId;
        return this;
    }
    public set batchId(batchId: string  | undefined) {
        this['batch_id'] = batchId;
    }
    public get batchId(): string | undefined {
        return this['batch_id'];
    }
}