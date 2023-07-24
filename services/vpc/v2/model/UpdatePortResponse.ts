import { Port } from './Port';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class UpdatePortResponse extends SdkResponse {
    public port?: Port;
    public constructor() { 
        super();
    }
    public withPort(port: Port): UpdatePortResponse {
        this['port'] = port;
        return this;
    }
}