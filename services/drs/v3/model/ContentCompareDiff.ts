

export class ContentCompareDiff {
    private 'target_select_sql'?: string;
    private 'source_select_sql'?: string;
    private 'source_key_value'?: Array<string>;
    private 'target_key_value'?: Array<string>;
    public constructor(sourceKeyValue?: Array<string>, targetKeyValue?: Array<string>) { 
        this['source_key_value'] = sourceKeyValue;
        this['target_key_value'] = targetKeyValue;
    }
    public withTargetSelectSql(targetSelectSql: string): ContentCompareDiff {
        this['target_select_sql'] = targetSelectSql;
        return this;
    }
    public set targetSelectSql(targetSelectSql: string  | undefined) {
        this['target_select_sql'] = targetSelectSql;
    }
    public get targetSelectSql(): string | undefined {
        return this['target_select_sql'];
    }
    public withSourceSelectSql(sourceSelectSql: string): ContentCompareDiff {
        this['source_select_sql'] = sourceSelectSql;
        return this;
    }
    public set sourceSelectSql(sourceSelectSql: string  | undefined) {
        this['source_select_sql'] = sourceSelectSql;
    }
    public get sourceSelectSql(): string | undefined {
        return this['source_select_sql'];
    }
    public withSourceKeyValue(sourceKeyValue: Array<string>): ContentCompareDiff {
        this['source_key_value'] = sourceKeyValue;
        return this;
    }
    public set sourceKeyValue(sourceKeyValue: Array<string>  | undefined) {
        this['source_key_value'] = sourceKeyValue;
    }
    public get sourceKeyValue(): Array<string> | undefined {
        return this['source_key_value'];
    }
    public withTargetKeyValue(targetKeyValue: Array<string>): ContentCompareDiff {
        this['target_key_value'] = targetKeyValue;
        return this;
    }
    public set targetKeyValue(targetKeyValue: Array<string>  | undefined) {
        this['target_key_value'] = targetKeyValue;
    }
    public get targetKeyValue(): Array<string> | undefined {
        return this['target_key_value'];
    }
}