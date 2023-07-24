import { AgencyTokenResult } from './AgencyTokenResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class KeystoneCreateAgencyTokenResponse extends SdkResponse {
    public token?: AgencyTokenResult;
    private 'X-Subject-Token'?: string | undefined;
    public constructor() { 
        super();
    }
    public withToken(token: AgencyTokenResult): KeystoneCreateAgencyTokenResponse {
        this['token'] = token;
        return this;
    }
    public withXSubjectToken(xSubjectToken: string): KeystoneCreateAgencyTokenResponse {
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