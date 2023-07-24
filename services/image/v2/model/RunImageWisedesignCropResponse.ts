import { ImageWisedesignCropResponseResult } from './ImageWisedesignCropResponseResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class RunImageWisedesignCropResponse extends SdkResponse {
    public result?: ImageWisedesignCropResponseResult;
    public constructor() { 
        super();
    }
    public withResult(result: ImageWisedesignCropResponseResult): RunImageWisedesignCropResponse {
        this['result'] = result;
        return this;
    }
}