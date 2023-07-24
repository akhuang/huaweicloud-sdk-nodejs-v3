import { BusinessCardResult } from './BusinessCardResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class RecognizeBusinessCardResponse extends SdkResponse {
    public result?: BusinessCardResult;
    public constructor() { 
        super();
    }
    public withResult(result: BusinessCardResult): RecognizeBusinessCardResponse {
        this['result'] = result;
        return this;
    }
}