import { AgencyPolicyRoleResult } from './AgencyPolicyRoleResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class CreateAgencyCustomPolicyResponse extends SdkResponse {
    public role?: AgencyPolicyRoleResult;
    public constructor() { 
        super();
    }
    public withRole(role: AgencyPolicyRoleResult): CreateAgencyCustomPolicyResponse {
        this['role'] = role;
        return this;
    }
}