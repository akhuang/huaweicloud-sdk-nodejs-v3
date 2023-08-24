

export class ListJarPackageStatisticsRequest {
    private 'enterprise_project_id'?: string;
    private 'file_name'?: string;
    public category?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListJarPackageStatisticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFileName(fileName: string): ListJarPackageStatisticsRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withCategory(category: string): ListJarPackageStatisticsRequest {
        this['category'] = category;
        return this;
    }
    public withLimit(limit: number): ListJarPackageStatisticsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListJarPackageStatisticsRequest {
        this['offset'] = offset;
        return this;
    }
}