import { BaseInfo } from './BaseInfo';
import { ReviewInfo } from './ReviewInfo';
import { ThumbnailInfo } from './ThumbnailInfo';
import { TranscodeInfo } from './TranscodeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssetDetailResponse extends SdkResponse {
    private 'asset_id'?: string;
    private 'base_info'?: BaseInfo;
    private 'transcode_info'?: TranscodeInfo;
    private 'thumbnail_info'?: ThumbnailInfo;
    private 'review_info'?: ReviewInfo;
    public constructor() { 
        super();
    }
    public withAssetId(assetId: string): ShowAssetDetailResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withBaseInfo(baseInfo: BaseInfo): ShowAssetDetailResponse {
        this['base_info'] = baseInfo;
        return this;
    }
    public set baseInfo(baseInfo: BaseInfo  | undefined) {
        this['base_info'] = baseInfo;
    }
    public get baseInfo(): BaseInfo | undefined {
        return this['base_info'];
    }
    public withTranscodeInfo(transcodeInfo: TranscodeInfo): ShowAssetDetailResponse {
        this['transcode_info'] = transcodeInfo;
        return this;
    }
    public set transcodeInfo(transcodeInfo: TranscodeInfo  | undefined) {
        this['transcode_info'] = transcodeInfo;
    }
    public get transcodeInfo(): TranscodeInfo | undefined {
        return this['transcode_info'];
    }
    public withThumbnailInfo(thumbnailInfo: ThumbnailInfo): ShowAssetDetailResponse {
        this['thumbnail_info'] = thumbnailInfo;
        return this;
    }
    public set thumbnailInfo(thumbnailInfo: ThumbnailInfo  | undefined) {
        this['thumbnail_info'] = thumbnailInfo;
    }
    public get thumbnailInfo(): ThumbnailInfo | undefined {
        return this['thumbnail_info'];
    }
    public withReviewInfo(reviewInfo: ReviewInfo): ShowAssetDetailResponse {
        this['review_info'] = reviewInfo;
        return this;
    }
    public set reviewInfo(reviewInfo: ReviewInfo  | undefined) {
        this['review_info'] = reviewInfo;
    }
    public get reviewInfo(): ReviewInfo | undefined {
        return this['review_info'];
    }
}