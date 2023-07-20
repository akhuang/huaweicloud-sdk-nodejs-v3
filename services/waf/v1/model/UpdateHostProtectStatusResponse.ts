
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateHostProtectStatusResponse extends SdkResponse {
    private 'protect_status'?: number;
    public constructor() { 
        super();
    }
    public withProtectStatus(protectStatus: number): UpdateHostProtectStatusResponse {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): number | undefined {
        return this['protect_status'];
    }
}