import { JobExeResult } from './JobExeResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobExesResponse extends SdkResponse {
    private 'job_execution'?: JobExeResult;
    public constructor() { 
        super();
    }
    public withJobExecution(jobExecution: JobExeResult): ShowJobExesResponse {
        this['job_execution'] = jobExecution;
        return this;
    }
    public set jobExecution(jobExecution: JobExeResult  | undefined) {
        this['job_execution'] = jobExecution;
    }
    public get jobExecution(): JobExeResult | undefined {
        return this['job_execution'];
    }
}