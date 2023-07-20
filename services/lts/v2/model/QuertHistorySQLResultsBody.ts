

export class QuertHistorySQLResultsBody {
    private 'last_use_time'?: number;
    private 'sql_statement'?: string;
    public constructor() { 
    }
    public withLastUseTime(lastUseTime: number): QuertHistorySQLResultsBody {
        this['last_use_time'] = lastUseTime;
        return this;
    }
    public set lastUseTime(lastUseTime: number  | undefined) {
        this['last_use_time'] = lastUseTime;
    }
    public get lastUseTime(): number | undefined {
        return this['last_use_time'];
    }
    public withSqlStatement(sqlStatement: string): QuertHistorySQLResultsBody {
        this['sql_statement'] = sqlStatement;
        return this;
    }
    public set sqlStatement(sqlStatement: string  | undefined) {
        this['sql_statement'] = sqlStatement;
    }
    public get sqlStatement(): string | undefined {
        return this['sql_statement'];
    }
}