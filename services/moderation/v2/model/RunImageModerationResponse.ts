import { ImageDetectionResultBody } from './ImageDetectionResultBody';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class RunImageModerationResponse extends SdkResponse {
    public result?: ImageDetectionResultBody;
    public constructor() { 
        super();
    }
    public withResult(result: ImageDetectionResultBody): RunImageModerationResponse {
        this['result'] = result;
        return this;
    }
}