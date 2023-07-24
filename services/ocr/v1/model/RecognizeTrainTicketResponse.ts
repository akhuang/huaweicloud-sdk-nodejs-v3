import { TrainTicketResult } from './TrainTicketResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class RecognizeTrainTicketResponse extends SdkResponse {
    public result?: TrainTicketResult;
    public constructor() { 
        super();
    }
    public withResult(result: TrainTicketResult): RecognizeTrainTicketResponse {
        this['result'] = result;
        return this;
    }
}