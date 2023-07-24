
import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryByCloudIdeResponse extends SdkResponse {
    public url?: string;
    public constructor() { 
        super();
    }
    public withUrl(url: string): ShowRepositoryByCloudIdeResponse {
        this['url'] = url;
        return this;
    }
}