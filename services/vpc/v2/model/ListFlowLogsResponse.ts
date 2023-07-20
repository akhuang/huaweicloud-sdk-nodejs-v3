import { FlowLogResp } from './FlowLogResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlowLogsResponse extends SdkResponse {
    private 'flow_logs'?: Array<FlowLogResp>;
    public constructor() { 
        super();
    }
    public withFlowLogs(flowLogs: Array<FlowLogResp>): ListFlowLogsResponse {
        this['flow_logs'] = flowLogs;
        return this;
    }
    public set flowLogs(flowLogs: Array<FlowLogResp>  | undefined) {
        this['flow_logs'] = flowLogs;
    }
    public get flowLogs(): Array<FlowLogResp> | undefined {
        return this['flow_logs'];
    }
}