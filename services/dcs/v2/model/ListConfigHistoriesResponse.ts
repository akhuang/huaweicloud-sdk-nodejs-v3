import { HistoryInfo } from './HistoryInfo';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListConfigHistoriesResponse extends SdkResponse {
    private 'history_num'?: number | undefined;
    public histories?: Array<HistoryInfo>;
    public constructor() { 
        super();
    }
    public withHistoryNum(historyNum: number): ListConfigHistoriesResponse {
        this['history_num'] = historyNum;
        return this;
    }
    public set historyNum(historyNum: number | undefined) {
        this['history_num'] = historyNum;
    }
    public get historyNum() {
        return this['history_num'];
    }
    public withHistories(histories: Array<HistoryInfo>): ListConfigHistoriesResponse {
        this['histories'] = histories;
        return this;
    }
}