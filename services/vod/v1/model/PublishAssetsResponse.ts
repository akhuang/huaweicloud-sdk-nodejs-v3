import { AssetInfo } from './AssetInfo';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class PublishAssetsResponse extends SdkResponse {
    private 'asset_info_array'?: Array<AssetInfo> | undefined;
    public constructor() { 
        super();
    }
    public withAssetInfoArray(assetInfoArray: Array<AssetInfo>): PublishAssetsResponse {
        this['asset_info_array'] = assetInfoArray;
        return this;
    }
    public set assetInfoArray(assetInfoArray: Array<AssetInfo> | undefined) {
        this['asset_info_array'] = assetInfoArray;
    }
    public get assetInfoArray() {
        return this['asset_info_array'];
    }
}