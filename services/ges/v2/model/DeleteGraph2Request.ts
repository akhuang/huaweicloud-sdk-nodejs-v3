

export class DeleteGraph2Request {
    private 'graph_id'?: string;
    private 'keep_backup'?: boolean;
    private 'delete_eip'?: boolean;
    public constructor(graphId?: string) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): DeleteGraph2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string  | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId(): string | undefined {
        return this['graph_id'];
    }
    public withKeepBackup(keepBackup: boolean): DeleteGraph2Request {
        this['keep_backup'] = keepBackup;
        return this;
    }
    public set keepBackup(keepBackup: boolean  | undefined) {
        this['keep_backup'] = keepBackup;
    }
    public get keepBackup(): boolean | undefined {
        return this['keep_backup'];
    }
    public withDeleteEip(deleteEip: boolean): DeleteGraph2Request {
        this['delete_eip'] = deleteEip;
        return this;
    }
    public set deleteEip(deleteEip: boolean  | undefined) {
        this['delete_eip'] = deleteEip;
    }
    public get deleteEip(): boolean | undefined {
        return this['delete_eip'];
    }
}