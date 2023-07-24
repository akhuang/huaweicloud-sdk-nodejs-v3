import { Trigger } from './Trigger';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListTriggersDetailsResponse extends SdkResponse {
    public body?: Array<Trigger>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<Trigger>): ListTriggersDetailsResponse {
        this['body'] = body;
        return this;
    }
}