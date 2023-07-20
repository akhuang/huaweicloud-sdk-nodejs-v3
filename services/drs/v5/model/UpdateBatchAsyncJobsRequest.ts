import { BatchAsyncUpdateJobReq } from './BatchAsyncUpdateJobReq';


export class UpdateBatchAsyncJobsRequest {
    private 'async_job_id'?: string;
    private 'X-Language'?: UpdateBatchAsyncJobsRequestXLanguageEnum | string;
    public body?: BatchAsyncUpdateJobReq;
    public constructor(asyncJobId?: string) { 
        this['async_job_id'] = asyncJobId;
    }
    public withAsyncJobId(asyncJobId: string): UpdateBatchAsyncJobsRequest {
        this['async_job_id'] = asyncJobId;
        return this;
    }
    public set asyncJobId(asyncJobId: string  | undefined) {
        this['async_job_id'] = asyncJobId;
    }
    public get asyncJobId(): string | undefined {
        return this['async_job_id'];
    }
    public withXLanguage(xLanguage: UpdateBatchAsyncJobsRequestXLanguageEnum | string): UpdateBatchAsyncJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateBatchAsyncJobsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateBatchAsyncJobsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchAsyncUpdateJobReq): UpdateBatchAsyncJobsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateBatchAsyncJobsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
