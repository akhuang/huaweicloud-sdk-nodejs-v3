

export class BatchUpdateUserStatusRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public value?: BatchUpdateUserStatusRequestValueEnum | number;
    public accountType?: number;
    public body?: Array<string>;
    public constructor(value?: number) { 
        this['value'] = value;
    }
    public withXRequestId(xRequestId: string): BatchUpdateUserStatusRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): BatchUpdateUserStatusRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withValue(value: BatchUpdateUserStatusRequestValueEnum | number): BatchUpdateUserStatusRequest {
        this['value'] = value;
        return this;
    }
    public withAccountType(accountType: number): BatchUpdateUserStatusRequest {
        this['accountType'] = accountType;
        return this;
    }
    public withBody(body: Array<string>): BatchUpdateUserStatusRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchUpdateUserStatusRequestValueEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
