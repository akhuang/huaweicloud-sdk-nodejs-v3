
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddDeviceGroupResponse extends SdkResponse {
    private 'group_id'?: string;
    public name?: string;
    public description?: string;
    private 'super_group_id'?: string;
    private 'group_type'?: string;
    private 'dynamic_group_rule'?: string;
    public constructor() { 
        super();
    }
    public withGroupId(groupId: string): AddDeviceGroupResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withName(name: string): AddDeviceGroupResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AddDeviceGroupResponse {
        this['description'] = description;
        return this;
    }
    public withSuperGroupId(superGroupId: string): AddDeviceGroupResponse {
        this['super_group_id'] = superGroupId;
        return this;
    }
    public set superGroupId(superGroupId: string  | undefined) {
        this['super_group_id'] = superGroupId;
    }
    public get superGroupId(): string | undefined {
        return this['super_group_id'];
    }
    public withGroupType(groupType: string): AddDeviceGroupResponse {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): string | undefined {
        return this['group_type'];
    }
    public withDynamicGroupRule(dynamicGroupRule: string): AddDeviceGroupResponse {
        this['dynamic_group_rule'] = dynamicGroupRule;
        return this;
    }
    public set dynamicGroupRule(dynamicGroupRule: string  | undefined) {
        this['dynamic_group_rule'] = dynamicGroupRule;
    }
    public get dynamicGroupRule(): string | undefined {
        return this['dynamic_group_rule'];
    }
}