

export class TagItem {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): TagItem {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TagItem {
        this['value'] = value;
        return this;
    }
}