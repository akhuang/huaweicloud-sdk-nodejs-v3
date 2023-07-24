import { TransportationLicenseResult } from './TransportationLicenseResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class RecognizeTransportationLicenseResponse extends SdkResponse {
    public result?: TransportationLicenseResult;
    public constructor() { 
        super();
    }
    public withResult(result: TransportationLicenseResult): RecognizeTransportationLicenseResponse {
        this['result'] = result;
        return this;
    }
}