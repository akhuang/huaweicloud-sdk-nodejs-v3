import { RetryInfo } from './RetryInfo';


export class BatchRetryReq {
    public jobs?: Array<RetryInfo>;
    public constructor(jobs?: Array<RetryInfo>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<RetryInfo>): BatchRetryReq {
        this['jobs'] = jobs;
        return this;
    }
}