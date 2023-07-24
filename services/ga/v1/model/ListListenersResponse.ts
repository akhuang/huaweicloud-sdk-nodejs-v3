import { ListenerDetail } from './ListenerDetail';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListListenersResponse extends SdkResponse {
    public listeners?: Array<ListenerDetail>;
    private 'page_info'?: PageInfo | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withListeners(listeners: Array<ListenerDetail>): ListListenersResponse {
        this['listeners'] = listeners;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListListenersResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListListenersResponse {
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