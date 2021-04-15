import { ClusterInformation } from './ClusterInformation';


export class UpdateClusterRequest {
    private 'cluster_id': string | undefined;
    private 'Content-Type': string | undefined;
    public errorStatus?: string;
    public body?: ClusterInformation;
    public constructor(clusterId?: any, contentType?: any) { 
        this['cluster_id'] = clusterId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): UpdateClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withContentType(contentType: string): UpdateClusterRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withErrorStatus(errorStatus: string): UpdateClusterRequest {
        this['errorStatus'] = errorStatus;
        return this;
    }
    public withBody(body: ClusterInformation): UpdateClusterRequest {
        this['body'] = body;
        return this;
    }
}