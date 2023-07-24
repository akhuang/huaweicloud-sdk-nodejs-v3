import { Port } from './Port';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowPortResponse extends SdkResponse {
    public port?: Port;
    public constructor() { 
        super();
    }
    public withPort(port: Port): ShowPortResponse {
        this['port'] = port;
        return this;
    }
}