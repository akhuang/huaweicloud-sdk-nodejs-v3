import { ListenerDetail } from './ListenerDetail';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class UpdateListenerResponse extends SdkResponse {
    public listener?: ListenerDetail;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withListener(listener: ListenerDetail): UpdateListenerResponse {
        this['listener'] = listener;
        return this;
    }
    public withRequestId(requestId: string): UpdateListenerResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}