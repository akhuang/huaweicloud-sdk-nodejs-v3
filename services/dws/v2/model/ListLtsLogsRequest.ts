

export class ListLtsLogsRequest {
    private 'cluster_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListLtsLogsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withLimit(limit: number): ListLtsLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListLtsLogsRequest {
        this['offset'] = offset;
        return this;
    }
}