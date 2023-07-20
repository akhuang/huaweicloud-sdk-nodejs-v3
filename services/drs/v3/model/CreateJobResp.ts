

export class CreateJobResp {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'create_time'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'child_ids'?: Array<string>;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): CreateJobResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateJobResp {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): CreateJobResp {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): CreateJobResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withErrorCode(errorCode: string): CreateJobResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): CreateJobResp {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withChildIds(childIds: Array<string>): CreateJobResp {
        this['child_ids'] = childIds;
        return this;
    }
    public set childIds(childIds: Array<string>  | undefined) {
        this['child_ids'] = childIds;
    }
    public get childIds(): Array<string> | undefined {
        return this['child_ids'];
    }
}