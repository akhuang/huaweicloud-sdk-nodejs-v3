

export class ListDeviceProxiesRequest {
    private 'Instance-Id'?: string;
    private 'app_id'?: string;
    private 'proxy_name'?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListDeviceProxiesRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withAppId(appId: string): ListDeviceProxiesRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withProxyName(proxyName: string): ListDeviceProxiesRequest {
        this['proxy_name'] = proxyName;
        return this;
    }
    public set proxyName(proxyName: string  | undefined) {
        this['proxy_name'] = proxyName;
    }
    public get proxyName(): string | undefined {
        return this['proxy_name'];
    }
    public withLimit(limit: number): ListDeviceProxiesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListDeviceProxiesRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListDeviceProxiesRequest {
        this['offset'] = offset;
        return this;
    }
}