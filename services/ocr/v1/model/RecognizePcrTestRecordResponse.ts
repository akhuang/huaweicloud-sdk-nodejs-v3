import { PcrTestRecordResult } from './PcrTestRecordResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class RecognizePcrTestRecordResponse extends SdkResponse {
    public result?: PcrTestRecordResult;
    public constructor() { 
        super();
    }
    public withResult(result: PcrTestRecordResult): RecognizePcrTestRecordResponse {
        this['result'] = result;
        return this;
    }
}