import { TagCreateResponseItem } from './TagCreateResponseItem';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class CreateResourceTagResponse extends SdkResponse {
    private 'failed_resources'?: Array<TagCreateResponseItem> | undefined;
    public constructor() { 
        super();
    }
    public withFailedResources(failedResources: Array<TagCreateResponseItem>): CreateResourceTagResponse {
        this['failed_resources'] = failedResources;
        return this;
    }
    public set failedResources(failedResources: Array<TagCreateResponseItem> | undefined) {
        this['failed_resources'] = failedResources;
    }
    public get failedResources() {
        return this['failed_resources'];
    }
}