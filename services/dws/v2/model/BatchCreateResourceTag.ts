

export class BatchCreateResourceTag {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): BatchCreateResourceTag {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): BatchCreateResourceTag {
        this['value'] = value;
        return this;
    }
}