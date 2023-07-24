import { SecurityGroupInfo } from './SecurityGroupInfo';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityGroupResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'security_group'?: SecurityGroupInfo | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowSecurityGroupResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withSecurityGroup(securityGroup: SecurityGroupInfo): ShowSecurityGroupResponse {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: SecurityGroupInfo | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup() {
        return this['security_group'];
    }
}