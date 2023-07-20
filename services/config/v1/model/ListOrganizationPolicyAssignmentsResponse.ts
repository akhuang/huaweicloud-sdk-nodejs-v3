import { OrganizationPolicyAssignmentResponse } from './OrganizationPolicyAssignmentResponse';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOrganizationPolicyAssignmentsResponse extends SdkResponse {
    private 'organization_policy_assignments'?: Array<OrganizationPolicyAssignmentResponse>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withOrganizationPolicyAssignments(organizationPolicyAssignments: Array<OrganizationPolicyAssignmentResponse>): ListOrganizationPolicyAssignmentsResponse {
        this['organization_policy_assignments'] = organizationPolicyAssignments;
        return this;
    }
    public set organizationPolicyAssignments(organizationPolicyAssignments: Array<OrganizationPolicyAssignmentResponse>  | undefined) {
        this['organization_policy_assignments'] = organizationPolicyAssignments;
    }
    public get organizationPolicyAssignments(): Array<OrganizationPolicyAssignmentResponse> | undefined {
        return this['organization_policy_assignments'];
    }
    public withPageInfo(pageInfo: PageInfo): ListOrganizationPolicyAssignmentsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}