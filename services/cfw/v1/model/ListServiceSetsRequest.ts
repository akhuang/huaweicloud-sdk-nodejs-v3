

export class ListServiceSetsRequest {
    private 'project_id'?: string;
    private 'object_id'?: string;
    private 'key_word'?: string;
    public limit?: number;
    public offset?: number;
    private 'enterprise_project_id'?: string;
    private 'fw_instance_id'?: string;
    private 'query_service_set_type'?: number;
    public constructor(projectId?: string, objectId?: string, limit?: number, offset?: number) { 
        this['project_id'] = projectId;
        this['object_id'] = objectId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListServiceSetsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withObjectId(objectId: string): ListServiceSetsRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withKeyWord(keyWord: string): ListServiceSetsRequest {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string  | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord(): string | undefined {
        return this['key_word'];
    }
    public withLimit(limit: number): ListServiceSetsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListServiceSetsRequest {
        this['offset'] = offset;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListServiceSetsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListServiceSetsRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withQueryServiceSetType(queryServiceSetType: number): ListServiceSetsRequest {
        this['query_service_set_type'] = queryServiceSetType;
        return this;
    }
    public set queryServiceSetType(queryServiceSetType: number  | undefined) {
        this['query_service_set_type'] = queryServiceSetType;
    }
    public get queryServiceSetType(): number | undefined {
        return this['query_service_set_type'];
    }
}