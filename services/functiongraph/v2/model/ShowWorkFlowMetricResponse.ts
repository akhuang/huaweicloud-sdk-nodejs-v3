import { SlaReportsValue } from './SlaReportsValue';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkFlowMetricResponse extends SdkResponse {
    public count?: Array<SlaReportsValue>;
    public duration?: Array<SlaReportsValue>;
    private 'fail_count'?: Array<SlaReportsValue> | undefined;
    private 'running_count'?: Array<SlaReportsValue> | undefined;
    public constructor() { 
        super();
    }
    public withCount(count: Array<SlaReportsValue>): ShowWorkFlowMetricResponse {
        this['count'] = count;
        return this;
    }
    public withDuration(duration: Array<SlaReportsValue>): ShowWorkFlowMetricResponse {
        this['duration'] = duration;
        return this;
    }
    public withFailCount(failCount: Array<SlaReportsValue>): ShowWorkFlowMetricResponse {
        this['fail_count'] = failCount;
        return this;
    }
    public set failCount(failCount: Array<SlaReportsValue> | undefined) {
        this['fail_count'] = failCount;
    }
    public get failCount() {
        return this['fail_count'];
    }
    public withRunningCount(runningCount: Array<SlaReportsValue>): ShowWorkFlowMetricResponse {
        this['running_count'] = runningCount;
        return this;
    }
    public set runningCount(runningCount: Array<SlaReportsValue> | undefined) {
        this['running_count'] = runningCount;
    }
    public get runningCount() {
        return this['running_count'];
    }
}