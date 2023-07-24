import { Tag } from './Tag';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowVolumeTagsResponse extends SdkResponse {
    public tags?: Array<Tag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<Tag>): ShowVolumeTagsResponse {
        this['tags'] = tags;
        return this;
    }
}