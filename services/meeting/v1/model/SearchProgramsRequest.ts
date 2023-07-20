

export class SearchProgramsRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): SearchProgramsRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): SearchProgramsRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withOffset(offset: number): SearchProgramsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchProgramsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): SearchProgramsRequest {
        this['searchKey'] = searchKey;
        return this;
    }
}