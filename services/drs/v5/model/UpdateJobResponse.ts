import { ErrorResp } from './ErrorResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateJobResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public id?: string;
    public name?: string;
    public status?: string;
    public constructor(errorCode?: string, errorMsg?: string, id?: string, name?: string, status?: string) { 
        super();
        this['error_code'] = errorCode;
        this['error_msg'] = errorMsg;
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
    }
    public withErrorCode(errorCode: string): UpdateJobResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): UpdateJobResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withId(id: string): UpdateJobResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateJobResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): UpdateJobResponse {
        this['status'] = status;
        return this;
    }
}