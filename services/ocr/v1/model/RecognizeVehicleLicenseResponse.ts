import { VehicleLicenseResult } from './VehicleLicenseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeVehicleLicenseResponse extends SdkResponse {
    public result?: VehicleLicenseResult;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: VehicleLicenseResult): RecognizeVehicleLicenseResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): RecognizeVehicleLicenseResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}