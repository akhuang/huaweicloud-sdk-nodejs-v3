

export class InstanceTagItem {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): InstanceTagItem {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): InstanceTagItem {
        this['value'] = value;
        return this;
    }
}