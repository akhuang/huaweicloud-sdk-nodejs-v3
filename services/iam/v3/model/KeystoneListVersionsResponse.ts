import { Versions } from './Versions';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListVersionsResponse extends SdkResponse {
    public versions?: Versions;
    public constructor() { 
        super();
    }
    public withVersions(versions: Versions): KeystoneListVersionsResponse {
        this['versions'] = versions;
        return this;
    }
}