

export class OpExtendInfoVaultDelete {
    private 'fail_count'?: number;
    private 'total_count'?: number;
    public constructor() { 
    }
    public withFailCount(failCount: number): OpExtendInfoVaultDelete {
        this['fail_count'] = failCount;
        return this;
    }
    public set failCount(failCount: number  | undefined) {
        this['fail_count'] = failCount;
    }
    public get failCount(): number | undefined {
        return this['fail_count'];
    }
    public withTotalCount(totalCount: number): OpExtendInfoVaultDelete {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}