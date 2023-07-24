import { AclPolicyResult } from './AclPolicyResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class UpdateDomainConsoleAclPolicyResponse extends SdkResponse {
    private 'console_acl_policy'?: AclPolicyResult | undefined;
    public constructor() { 
        super();
    }
    public withConsoleAclPolicy(consoleAclPolicy: AclPolicyResult): UpdateDomainConsoleAclPolicyResponse {
        this['console_acl_policy'] = consoleAclPolicy;
        return this;
    }
    public set consoleAclPolicy(consoleAclPolicy: AclPolicyResult | undefined) {
        this['console_acl_policy'] = consoleAclPolicy;
    }
    public get consoleAclPolicy() {
        return this['console_acl_policy'];
    }
}