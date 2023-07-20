

export class ShowDeviceStatusRequest {
    private 'X-Request-ID'?: string;
    private 'Accept-Language'?: string;
    public body?: Array<string>;
    public constructor() { 
    }
    public withXRequestID(xRequestID: string): ShowDeviceStatusRequest {
        this['X-Request-ID'] = xRequestID;
        return this;
    }
    public set xRequestID(xRequestID: string  | undefined) {
        this['X-Request-ID'] = xRequestID;
    }
    public get xRequestID(): string | undefined {
        return this['X-Request-ID'];
    }
    public withAcceptLanguage(acceptLanguage: string): ShowDeviceStatusRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withBody(body: Array<string>): ShowDeviceStatusRequest {
        this['body'] = body;
        return this;
    }
}