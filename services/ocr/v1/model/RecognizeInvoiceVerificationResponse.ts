
import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class RecognizeInvoiceVerificationResponse extends SdkResponse {
    public result?: object;
    public constructor() { 
        super();
    }
    public withResult(result: object): RecognizeInvoiceVerificationResponse {
        this['result'] = result;
        return this;
    }
}