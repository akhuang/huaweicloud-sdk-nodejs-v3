

export class PostgresqlCreateSchemaReq {
    private 'schema_name'?: string;
    public owner?: string;
    public constructor(schemaName?: string, owner?: string) { 
        this['schema_name'] = schemaName;
        this['owner'] = owner;
    }
    public withSchemaName(schemaName: string): PostgresqlCreateSchemaReq {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withOwner(owner: string): PostgresqlCreateSchemaReq {
        this['owner'] = owner;
        return this;
    }
}