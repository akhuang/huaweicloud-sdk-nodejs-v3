import { Version } from './Version';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class KeystoneShowVersionResponse extends SdkResponse {
    public version?: Version;
    public constructor() { 
        super();
    }
    public withVersion(version: Version): KeystoneShowVersionResponse {
        this['version'] = version;
        return this;
    }
}