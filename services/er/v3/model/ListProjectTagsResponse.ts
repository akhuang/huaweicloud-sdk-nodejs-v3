import { Tags } from './Tags';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListProjectTagsResponse extends SdkResponse {
    public tags?: Array<Tags>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<Tags>): ListProjectTagsResponse {
        this['tags'] = tags;
        return this;
    }
}