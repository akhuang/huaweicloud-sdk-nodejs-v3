import { MainlandTravelPermitResult } from './MainlandTravelPermitResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class RecognizeMainlandTravelPermitResponse extends SdkResponse {
    public result?: MainlandTravelPermitResult;
    public constructor() { 
        super();
    }
    public withResult(result: MainlandTravelPermitResult): RecognizeMainlandTravelPermitResponse {
        this['result'] = result;
        return this;
    }
}