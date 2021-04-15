import { ClusterMetadata } from './ClusterMetadata';
import { ClusterStatus } from './ClusterStatus';
import { V3ClusterSpec } from './V3ClusterSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClusterResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: ClusterMetadata;
    public spec?: V3ClusterSpec;
    public status?: ClusterStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): CreateClusterResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): CreateClusterResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: ClusterMetadata): CreateClusterResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: V3ClusterSpec): CreateClusterResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: ClusterStatus): CreateClusterResponse {
        this['status'] = status;
        return this;
    }
}