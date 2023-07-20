
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAssetProcessTaskResponse extends SdkResponse {
    private 'asset_id'?: string;
    public constructor() { 
        super();
    }
    public withAssetId(assetId: string): CreateAssetProcessTaskResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
}