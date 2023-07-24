import { TokenResult } from './TokenResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class KeystoneCreateUserTokenByPasswordResponse extends SdkResponse {
    public token?: TokenResult;
    private 'X-Subject-Token'?: string | undefined;
    public constructor() { 
        super();
    }
    public withToken(token: TokenResult): KeystoneCreateUserTokenByPasswordResponse {
        this['token'] = token;
        return this;
    }
    public withXSubjectToken(xSubjectToken: string): KeystoneCreateUserTokenByPasswordResponse {
        this['X-Subject-Token'] = xSubjectToken;
        return this;
    }
    public set xSubjectToken(xSubjectToken: string | undefined) {
        this['X-Subject-Token'] = xSubjectToken;
    }
    public get xSubjectToken() {
        return this['X-Subject-Token'];
    }
}