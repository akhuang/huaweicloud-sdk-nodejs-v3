
import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class UpgradeClusterResponse extends SdkResponse {
    public uid?: string;
    public constructor() { 
        super();
    }
    public withUid(uid: string): UpgradeClusterResponse {
        this['uid'] = uid;
        return this;
    }
}