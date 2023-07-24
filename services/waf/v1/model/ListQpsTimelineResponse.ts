import { StatisticsTimelineItem } from './StatisticsTimelineItem';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListQpsTimelineResponse extends SdkResponse {
    public body?: Array<StatisticsTimelineItem>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<StatisticsTimelineItem>): ListQpsTimelineResponse {
        this['body'] = body;
        return this;
    }
}