import { LiveDetectRespVideoresult } from './LiveDetectRespVideoresult';
import { WarningList } from './WarningList';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class DetectLiveByUrlResponse extends SdkResponse {
    private 'video-result'?: LiveDetectRespVideoresult | undefined;
    private 'warning-list'?: Array<WarningList> | undefined;
    public constructor() { 
        super();
    }
    public withVideoResult(videoResult: LiveDetectRespVideoresult): DetectLiveByUrlResponse {
        this['video-result'] = videoResult;
        return this;
    }
    public set videoResult(videoResult: LiveDetectRespVideoresult | undefined) {
        this['video-result'] = videoResult;
    }
    public get videoResult() {
        return this['video-result'];
    }
    public withWarningList(warningList: Array<WarningList>): DetectLiveByUrlResponse {
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