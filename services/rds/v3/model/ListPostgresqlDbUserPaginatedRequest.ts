

export class ListPostgresqlDbUserPaginatedRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public page?: number;
    public limit?: number;
    public constructor(instanceId?: string, page?: number, limit?: number) { 
        this['instance_id'] = instanceId;
        this['page'] = page;
        this['limit'] = limit;
    }
    public withXLanguage(xLanguage: string): ListPostgresqlDbUserPaginatedRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListPostgresqlDbUserPaginatedRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPage(page: number): ListPostgresqlDbUserPaginatedRequest {
        this['page'] = page;
        return this;
    }
    public withLimit(limit: number): ListPostgresqlDbUserPaginatedRequest {
        this['limit'] = limit;
        return this;
    }
}