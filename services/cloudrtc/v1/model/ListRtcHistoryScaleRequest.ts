

export class ListRtcHistoryScaleRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    public app?: string;
    public metric?: Array<string>;
    private 'start_date'?: string;
    private 'end_date'?: string;
    public constructor(app?: string, metric?: Array<string>) { 
        this['app'] = app;
        this['metric'] = metric;
    }
    public withAuthorization(authorization: string): ListRtcHistoryScaleRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListRtcHistoryScaleRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListRtcHistoryScaleRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withApp(app: string): ListRtcHistoryScaleRequest {
        this['app'] = app;
        return this;
    }
    public withMetric(metric: Array<string>): ListRtcHistoryScaleRequest {
        this['metric'] = metric;
        return this;
    }
    public withStartDate(startDate: string): ListRtcHistoryScaleRequest {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: string): ListRtcHistoryScaleRequest {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
}