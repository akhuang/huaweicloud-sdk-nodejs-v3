import { UrlObject } from './UrlObject';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowHistoryTaskDetailsResponse extends SdkResponse {
    public id?: string;
    private 'task_type'?: string | undefined;
    public status?: string;
    public urls?: Array<UrlObject>;
    private 'create_time'?: number | undefined;
    public processing?: number;
    public succeed?: number;
    public failed?: number;
    public total?: number;
    private 'file_type'?: string | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowHistoryTaskDetailsResponse {
        this['id'] = id;
        return this;
    }
    public withTaskType(taskType: string): ShowHistoryTaskDetailsResponse {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
    public withStatus(status: string): ShowHistoryTaskDetailsResponse {
        this['status'] = status;
        return this;
    }
    public withUrls(urls: Array<UrlObject>): ShowHistoryTaskDetailsResponse {
        this['urls'] = urls;
        return this;
    }
    public withCreateTime(createTime: number): ShowHistoryTaskDetailsResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withProcessing(processing: number): ShowHistoryTaskDetailsResponse {
        this['processing'] = processing;
        return this;
    }
    public withSucceed(succeed: number): ShowHistoryTaskDetailsResponse {
        this['succeed'] = succeed;
        return this;
    }
    public withFailed(failed: number): ShowHistoryTaskDetailsResponse {
        this['failed'] = failed;
        return this;
    }
    public withTotal(total: number): ShowHistoryTaskDetailsResponse {
        this['total'] = total;
        return this;
    }
    public withFileType(fileType: string): ShowHistoryTaskDetailsResponse {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType() {
        return this['file_type'];
    }
}