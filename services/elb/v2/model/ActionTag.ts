

export class ActionTag {
    public key?: string;
    public values?: Array<string>;
    public constructor(key?: string, values?: Array<string>) { 
        this['key'] = key;
        this['values'] = values;
    }
    public withKey(key: string): ActionTag {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): ActionTag {
        this['values'] = values;
        return this;
    }
}