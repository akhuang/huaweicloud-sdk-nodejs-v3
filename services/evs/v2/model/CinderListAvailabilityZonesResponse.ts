import { AzInfo } from './AzInfo';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class CinderListAvailabilityZonesResponse extends SdkResponse {
    public availabilityZoneInfo?: Array<AzInfo>;
    public constructor() { 
        super();
    }
    public withAvailabilityZoneInfo(availabilityZoneInfo: Array<AzInfo>): CinderListAvailabilityZonesResponse {
        this['availabilityZoneInfo'] = availabilityZoneInfo;
        return this;
    }
}