
import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class RunDeleteCustomTagsResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): RunDeleteCustomTagsResponse {
        this['result'] = result;
        return this;
    }
}