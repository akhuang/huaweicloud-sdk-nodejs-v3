import { OpenEditConfReq } from './OpenEditConfReq';


export class UpdateWebinarRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public body?: OpenEditConfReq;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): UpdateWebinarRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): UpdateWebinarRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withBody(body: OpenEditConfReq): UpdateWebinarRequest {
        this['body'] = body;
        return this;
    }
}