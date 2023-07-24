import { ImageMediaTaggingDetResponseResult } from './ImageMediaTaggingDetResponseResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class RunImageMediaTaggingDetResponse extends SdkResponse {
    public result?: ImageMediaTaggingDetResponseResult;
    public constructor() { 
        super();
    }
    public withResult(result: ImageMediaTaggingDetResponseResult): RunImageMediaTaggingDetResponse {
        this['result'] = result;
        return this;
    }
}