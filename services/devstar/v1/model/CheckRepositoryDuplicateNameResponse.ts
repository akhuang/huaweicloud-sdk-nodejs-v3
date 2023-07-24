
import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class CheckRepositoryDuplicateNameResponse extends SdkResponse {
    public result?: boolean;
    public constructor() { 
        super();
    }
    public withResult(result: boolean): CheckRepositoryDuplicateNameResponse {
        this['result'] = result;
        return this;
    }
}