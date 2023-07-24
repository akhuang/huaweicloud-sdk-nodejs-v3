
import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class CountPublicIpInstanceResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): CountPublicIpInstanceResponse {
        this['body'] = body;
        return this;
    }
}