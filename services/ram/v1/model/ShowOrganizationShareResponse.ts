
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOrganizationShareResponse extends SdkResponse {
    public enabled?: boolean;
    public constructor() { 
        super();
    }
    public withEnabled(enabled: boolean): ShowOrganizationShareResponse {
        this['enabled'] = enabled;
        return this;
    }
}