import { ExitEntryPermitResult } from './ExitEntryPermitResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class RecognizeExitEntryPermitResponse extends SdkResponse {
    public result?: ExitEntryPermitResult;
    public constructor() { 
        super();
    }
    public withResult(result: ExitEntryPermitResult): RecognizeExitEntryPermitResponse {
        this['result'] = result;
        return this;
    }
}