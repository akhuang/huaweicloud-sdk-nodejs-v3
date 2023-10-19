import { MultivaluedTag } from './MultivaluedTag';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCentralNetworkTagsResponse extends SdkResponse {
    private 'request_id'?: string;
    public tags?: Array<MultivaluedTag>;
    public constructor(requestId?: string, tags?: Array<MultivaluedTag>) { 
        super();
        this['request_id'] = requestId;
        this['tags'] = tags;
    }
    public withRequestId(requestId: string): ListCentralNetworkTagsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTags(tags: Array<MultivaluedTag>): ListCentralNetworkTagsResponse {
        this['tags'] = tags;
        return this;
    }
}