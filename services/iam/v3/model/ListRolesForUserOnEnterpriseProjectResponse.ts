import { RolesItem } from './RolesItem';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ListRolesForUserOnEnterpriseProjectResponse extends SdkResponse {
    public roles?: Array<RolesItem>;
    public constructor() { 
        super();
    }
    public withRoles(roles: Array<RolesItem>): ListRolesForUserOnEnterpriseProjectResponse {
        this['roles'] = roles;
        return this;
    }
}