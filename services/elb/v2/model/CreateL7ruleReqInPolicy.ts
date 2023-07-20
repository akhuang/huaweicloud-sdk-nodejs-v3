

export class CreateL7ruleReqInPolicy {
    private 'admin_state_up'?: boolean;
    public type?: CreateL7ruleReqInPolicyTypeEnum | string;
    private 'compare_type'?: string;
    public key?: string;
    public value?: string;
    public invert?: boolean;
    public constructor(type?: string, compareType?: string, value?: string) { 
        this['type'] = type;
        this['compare_type'] = compareType;
        this['value'] = value;
    }
    public withAdminStateUp(adminStateUp: boolean): CreateL7ruleReqInPolicy {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withType(type: CreateL7ruleReqInPolicyTypeEnum | string): CreateL7ruleReqInPolicy {
        this['type'] = type;
        return this;
    }
    public withCompareType(compareType: string): CreateL7ruleReqInPolicy {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: string  | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType(): string | undefined {
        return this['compare_type'];
    }
    public withKey(key: string): CreateL7ruleReqInPolicy {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CreateL7ruleReqInPolicy {
        this['value'] = value;
        return this;
    }
    public withInvert(invert: boolean): CreateL7ruleReqInPolicy {
        this['invert'] = invert;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateL7ruleReqInPolicyTypeEnum {
    HOST_NAME = 'HOST_NAME',
    PATH = 'PATH'
}
