

export class UploadAsset {
    public url?: string;
    private 'asset_id'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withUrl(url: string): UploadAsset {
        this['url'] = url;
        return this;
    }
    public withAssetId(assetId: string): UploadAsset {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withErrorCode(errorCode: string): UploadAsset {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): UploadAsset {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}