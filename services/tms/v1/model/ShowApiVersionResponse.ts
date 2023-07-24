import { VersionDetail } from './VersionDetail';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowApiVersionResponse extends SdkResponse {
    public version?: VersionDetail;
    public constructor() { 
        super();
    }
    public withVersion(version: VersionDetail): ShowApiVersionResponse {
        this['version'] = version;
        return this;
    }
}