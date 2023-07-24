import { QuotaInvoiceResult } from './QuotaInvoiceResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class RecognizeQuotaInvoiceResponse extends SdkResponse {
    public result?: QuotaInvoiceResult;
    public constructor() { 
        super();
    }
    public withResult(result: QuotaInvoiceResult): RecognizeQuotaInvoiceResponse {
        this['result'] = result;
        return this;
    }
}