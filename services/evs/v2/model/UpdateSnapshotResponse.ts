import { SnapshotDetails } from './SnapshotDetails';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class UpdateSnapshotResponse extends SdkResponse {
    public snapshot?: SnapshotDetails;
    public constructor() { 
        super();
    }
    public withSnapshot(snapshot: SnapshotDetails): UpdateSnapshotResponse {
        this['snapshot'] = snapshot;
        return this;
    }
}