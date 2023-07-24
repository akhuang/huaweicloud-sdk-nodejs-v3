
import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ChangeRuleStatusResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ChangeRuleStatusResponse {
        this['status'] = status;
        return this;
    }
}