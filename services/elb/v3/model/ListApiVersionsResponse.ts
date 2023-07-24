import { ApiVersionInfo } from './ApiVersionInfo';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListApiVersionsResponse extends SdkResponse {
    public versions?: Array<ApiVersionInfo>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<ApiVersionInfo>): ListApiVersionsResponse {
        this['versions'] = versions;
        return this;
    }
}