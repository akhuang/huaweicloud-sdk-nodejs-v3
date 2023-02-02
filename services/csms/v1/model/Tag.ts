

export class Tag {
    public key?: string;
    public values?: Array<string>;
    public constructor() { 
    }
    public withKey(key: string): Tag {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): Tag {
        this['values'] = values;
        return this;
    }
}