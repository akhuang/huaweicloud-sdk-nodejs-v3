import { RetentionLog } from './RetentionLog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRetentionHistoriesResponse extends SdkResponse {
    private 'retention_log'?: Array<RetentionLog>;
    public total?: number;
    private 'Content-Range'?: string;
    public constructor() { 
        super();
    }
    public withRetentionLog(retentionLog: Array<RetentionLog>): ListRetentionHistoriesResponse {
        this['retention_log'] = retentionLog;
        return this;
    }
    public set retentionLog(retentionLog: Array<RetentionLog>  | undefined) {
        this['retention_log'] = retentionLog;
    }
    public get retentionLog(): Array<RetentionLog> | undefined {
        return this['retention_log'];
    }
    public withTotal(total: number): ListRetentionHistoriesResponse {
        this['total'] = total;
        return this;
    }
    public withContentRange(contentRange: string): ListRetentionHistoriesResponse {
        this['Content-Range'] = contentRange;
        return this;
    }
    public set contentRange(contentRange: string  | undefined) {
        this['Content-Range'] = contentRange;
    }
    public get contentRange(): string | undefined {
        return this['Content-Range'];
    }
}