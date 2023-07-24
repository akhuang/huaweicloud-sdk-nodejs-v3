
import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class RunCreateAudioModerationJobResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'job_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): RunCreateAudioModerationJobResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withJobId(jobId: string): RunCreateAudioModerationJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
}