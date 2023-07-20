import { ConfigurationParameter } from './ConfigurationParameter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceParamGroupResponse extends SdkResponse {
    private 'datastore_version'?: string;
    private 'datastore_name'?: string;
    public created?: string;
    public updated?: string;
    private 'configuration_parameters'?: Array<ConfigurationParameter>;
    public constructor() { 
        super();
    }
    public withDatastoreVersion(datastoreVersion: string): ShowInstanceParamGroupResponse {
        this['datastore_version'] = datastoreVersion;
        return this;
    }
    public set datastoreVersion(datastoreVersion: string  | undefined) {
        this['datastore_version'] = datastoreVersion;
    }
    public get datastoreVersion(): string | undefined {
        return this['datastore_version'];
    }
    public withDatastoreName(datastoreName: string): ShowInstanceParamGroupResponse {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): string | undefined {
        return this['datastore_name'];
    }
    public withCreated(created: string): ShowInstanceParamGroupResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ShowInstanceParamGroupResponse {
        this['updated'] = updated;
        return this;
    }
    public withConfigurationParameters(configurationParameters: Array<ConfigurationParameter>): ShowInstanceParamGroupResponse {
        this['configuration_parameters'] = configurationParameters;
        return this;
    }
    public set configurationParameters(configurationParameters: Array<ConfigurationParameter>  | undefined) {
        this['configuration_parameters'] = configurationParameters;
    }
    public get configurationParameters(): Array<ConfigurationParameter> | undefined {
        return this['configuration_parameters'];
    }
}