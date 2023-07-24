import { OriginRangeBody } from './OriginRangeBody';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class UpdateRangeSwitchResponse extends SdkResponse {
    private 'origin_range'?: OriginRangeBody | undefined;
    public constructor() { 
        super();
    }
    public withOriginRange(originRange: OriginRangeBody): UpdateRangeSwitchResponse {
        this['origin_range'] = originRange;
        return this;
    }
    public set originRange(originRange: OriginRangeBody | undefined) {
        this['origin_range'] = originRange;
    }
    public get originRange() {
        return this['origin_range'];
    }
}