import { ServiceSetRecords } from './ServiceSetRecords';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListServiceSetResponse extends SdkResponse {
    public data?: ServiceSetRecords;
    public constructor() { 
        super();
    }
    public withData(data: ServiceSetRecords): ListServiceSetResponse {
        this['data'] = data;
        return this;
    }
}