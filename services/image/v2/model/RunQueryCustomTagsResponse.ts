
import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class RunQueryCustomTagsResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): RunQueryCustomTagsResponse {
        this['result'] = result;
        return this;
    }
}