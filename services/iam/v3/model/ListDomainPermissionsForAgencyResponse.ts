import { RoleResult } from './RoleResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListDomainPermissionsForAgencyResponse extends SdkResponse {
    public roles?: Array<RoleResult>;
    public constructor() { 
        super();
    }
    public withRoles(roles: Array<RoleResult>): ListDomainPermissionsForAgencyResponse {
        this['roles'] = roles;
        return this;
    }
}