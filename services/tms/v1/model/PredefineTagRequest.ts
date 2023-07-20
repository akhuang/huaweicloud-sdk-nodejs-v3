

export class PredefineTagRequest {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): PredefineTagRequest {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): PredefineTagRequest {
        this['value'] = value;
        return this;
    }
}