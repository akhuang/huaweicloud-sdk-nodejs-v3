import { AuthInfo } from './AuthInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSecretResponse extends SdkResponse {
    public auths?: { [key: string]: AuthInfo; };
    private 'X-Swr-Dockerlogin'?: string;
    public constructor() { 
        super();
    }
    public withAuths(auths: { [key: string]: AuthInfo; }): CreateSecretResponse {
        this['auths'] = auths;
        return this;
    }
    public withXSwrDockerlogin(xSwrDockerlogin: string): CreateSecretResponse {
        this['X-Swr-Dockerlogin'] = xSwrDockerlogin;
        return this;
    }
    public set xSwrDockerlogin(xSwrDockerlogin: string  | undefined) {
        this['X-Swr-Dockerlogin'] = xSwrDockerlogin;
    }
    public get xSwrDockerlogin(): string | undefined {
        return this['X-Swr-Dockerlogin'];
    }
}