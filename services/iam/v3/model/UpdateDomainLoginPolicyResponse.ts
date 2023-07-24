import { LoginPolicyResult } from './LoginPolicyResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class UpdateDomainLoginPolicyResponse extends SdkResponse {
    private 'login_policy'?: LoginPolicyResult | undefined;
    public constructor() { 
        super();
    }
    public withLoginPolicy(loginPolicy: LoginPolicyResult): UpdateDomainLoginPolicyResponse {
        this['login_policy'] = loginPolicy;
        return this;
    }
    public set loginPolicy(loginPolicy: LoginPolicyResult | undefined) {
        this['login_policy'] = loginPolicy;
    }
    public get loginPolicy() {
        return this['login_policy'];
    }
}