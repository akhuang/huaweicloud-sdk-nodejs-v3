import { BindHost } from './BindHost';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCertificateResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public content?: string;
    public key?: string;
    private 'expire_time'?: number;
    private 'exp_status'?: number;
    public timestamp?: number;
    private 'bind_host'?: Array<BindHost>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowCertificateResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowCertificateResponse {
        this['name'] = name;
        return this;
    }
    public withContent(content: string): ShowCertificateResponse {
        this['content'] = content;
        return this;
    }
    public withKey(key: string): ShowCertificateResponse {
        this['key'] = key;
        return this;
    }
    public withExpireTime(expireTime: number): ShowCertificateResponse {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withExpStatus(expStatus: number): ShowCertificateResponse {
        this['exp_status'] = expStatus;
        return this;
    }
    public set expStatus(expStatus: number  | undefined) {
        this['exp_status'] = expStatus;
    }
    public get expStatus(): number | undefined {
        return this['exp_status'];
    }
    public withTimestamp(timestamp: number): ShowCertificateResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withBindHost(bindHost: Array<BindHost>): ShowCertificateResponse {
        this['bind_host'] = bindHost;
        return this;
    }
    public set bindHost(bindHost: Array<BindHost>  | undefined) {
        this['bind_host'] = bindHost;
    }
    public get bindHost(): Array<BindHost> | undefined {
        return this['bind_host'];
    }
}