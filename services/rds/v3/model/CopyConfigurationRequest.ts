import { ConfigurationCopyRequestBody } from './ConfigurationCopyRequestBody';


export class CopyConfigurationRequest {
    private 'config_id'?: string;
    public body?: ConfigurationCopyRequestBody;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withConfigId(configId: string): CopyConfigurationRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withBody(body: ConfigurationCopyRequestBody): CopyConfigurationRequest {
        this['body'] = body;
        return this;
    }
}