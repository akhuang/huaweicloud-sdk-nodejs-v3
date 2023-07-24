import { Version } from './Version';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowSecretVersionResponse extends SdkResponse {
    public version?: Version;
    public constructor() { 
        super();
    }
    public withVersion(version: Version): ShowSecretVersionResponse {
        this['version'] = version;
        return this;
    }
}