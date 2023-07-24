import { DeviceShadowData } from './DeviceShadowData';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowDeviceShadowResponse extends SdkResponse {
    private 'device_id'?: string | undefined;
    public shadow?: Array<DeviceShadowData>;
    public constructor() { 
        super();
    }
    public withDeviceId(deviceId: string): ShowDeviceShadowResponse {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withShadow(shadow: Array<DeviceShadowData>): ShowDeviceShadowResponse {
        this['shadow'] = shadow;
        return this;
    }
}