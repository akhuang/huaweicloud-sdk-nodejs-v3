import { ResourceTags } from './ResourceTags';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListProjectTagsResponse extends SdkResponse {
    public tags?: Array<ResourceTags>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ResourceTags>): ListProjectTagsResponse {
        this['tags'] = tags;
        return this;
    }
}