import { SubJobsInfo } from './SubJobsInfo';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowResourcesJobDetailResponse extends SdkResponse {
    private 'job_id'?: string | undefined;
    private 'job_type'?: string | undefined;
    private 'begin_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public status?: string;
    private 'error_code'?: string | undefined;
    private 'fail_reason'?: string | undefined;
    public entities?: SubJobsInfo;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ShowResourcesJobDetailResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withJobType(jobType: string): ShowResourcesJobDetailResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType() {
        return this['job_type'];
    }
    public withBeginTime(beginTime: string): ShowResourcesJobDetailResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime() {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowResourcesJobDetailResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withStatus(status: string): ShowResourcesJobDetailResponse {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): ShowResourcesJobDetailResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withFailReason(failReason: string): ShowResourcesJobDetailResponse {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason() {
        return this['fail_reason'];
    }
    public withEntities(entities: SubJobsInfo): ShowResourcesJobDetailResponse {
        this['entities'] = entities;
        return this;
    }
}