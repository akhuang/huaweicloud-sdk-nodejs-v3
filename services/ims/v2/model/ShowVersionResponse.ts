import { OsVersionResponse } from './OsVersionResponse';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowVersionResponse extends SdkResponse {
    public versions?: Array<OsVersionResponse>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<OsVersionResponse>): ShowVersionResponse {
        this['versions'] = versions;
        return this;
    }
}