

export class DeleteGlobalValueRequest {
    private 'var_name'?: string;
    public constructor(varName?: string) { 
        this['var_name'] = varName;
    }
    public withVarName(varName: string): DeleteGlobalValueRequest {
        this['var_name'] = varName;
        return this;
    }
    public set varName(varName: string  | undefined) {
        this['var_name'] = varName;
    }
    public get varName(): string | undefined {
        return this['var_name'];
    }
}