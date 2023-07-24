import { VersionObject } from './VersionObject';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListSpecifiedVersionDetailsResponse extends SdkResponse {
    public version?: VersionObject;
    public constructor() { 
        super();
    }
    public withVersion(version: VersionObject): ListSpecifiedVersionDetailsResponse {
        this['version'] = version;
        return this;
    }
}