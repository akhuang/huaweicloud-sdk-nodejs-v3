import { ClusterShrinkReq } from './ClusterShrinkReq';


export class ShrinkClusterRequest {
    private 'cluster_id'?: string;
    public body?: ClusterShrinkReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ShrinkClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: ClusterShrinkReq): ShrinkClusterRequest {
        this['body'] = body;
        return this;
    }
}