

export class ResetConfigurationRequest {
    private 'config_id'?: string;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withConfigId(configId: string): ResetConfigurationRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
}