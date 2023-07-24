import { LiveDetectFaceRespResult } from './LiveDetectFaceRespResult';
import { WarningList } from './WarningList';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class DetectLiveFaceByFileResponse extends SdkResponse {
    public result?: LiveDetectFaceRespResult;
    private 'warning-list'?: Array<WarningList> | undefined;
    public constructor() { 
        super();
    }
    public withResult(result: LiveDetectFaceRespResult): DetectLiveFaceByFileResponse {
        this['result'] = result;
        return this;
    }
    public withWarningList(warningList: Array<WarningList>): DetectLiveFaceByFileResponse {
        this['warning-list'] = warningList;
        return this;
    }
    public set warningList(warningList: Array<WarningList> | undefined) {
        this['warning-list'] = warningList;
    }
    public get warningList() {
        return this['warning-list'];
    }
}