import { TokenResult } from './TokenResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class KeystoneValidateTokenResponse extends SdkResponse {
    public token?: TokenResult;
    private 'X-Subject-Token'?: string | undefined;
    public constructor() { 
        super();
    }
    public withToken(token: TokenResult): KeystoneValidateTokenResponse {
        this['token'] = token;
        return this;
    }
    public withXSubjectToken(xSubjectToken: string): KeystoneValidateTokenResponse {
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