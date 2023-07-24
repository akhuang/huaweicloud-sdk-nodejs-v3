
import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ConfirmAssetUploadResponse extends SdkResponse {
    private 'asset_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withAssetId(assetId: string): ConfirmAssetUploadResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId() {
        return this['asset_id'];
    }
}