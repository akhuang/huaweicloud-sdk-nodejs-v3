import { Tag } from './Tag';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListProjectSecretsTagsResponse extends SdkResponse {
    public tags?: Array<Tag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<Tag>): ListProjectSecretsTagsResponse {
        this['tags'] = tags;
        return this;
    }
}