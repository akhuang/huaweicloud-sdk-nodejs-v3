

export class AlertDataSource {
    private 'source_type'?: number;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    private 'region_id'?: string;
    private 'company_name'?: string;
    private 'product_name'?: string;
    private 'product_feature'?: string;
    private 'product_module'?: string;
    public constructor() { 
    }
    public withSourceType(sourceType: number): AlertDataSource {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: number  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): number | undefined {
        return this['source_type'];
    }
    public withDomainId(domainId: string): AlertDataSource {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): AlertDataSource {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): AlertDataSource {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withCompanyName(companyName: string): AlertDataSource {
        this['company_name'] = companyName;
        return this;
    }
    public set companyName(companyName: string  | undefined) {
        this['company_name'] = companyName;
    }
    public get companyName(): string | undefined {
        return this['company_name'];
    }
    public withProductName(productName: string): AlertDataSource {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withProductFeature(productFeature: string): AlertDataSource {
        this['product_feature'] = productFeature;
        return this;
    }
    public set productFeature(productFeature: string  | undefined) {
        this['product_feature'] = productFeature;
    }
    public get productFeature(): string | undefined {
        return this['product_feature'];
    }
    public withProductModule(productModule: string): AlertDataSource {
        this['product_module'] = productModule;
        return this;
    }
    public set productModule(productModule: string  | undefined) {
        this['product_module'] = productModule;
    }
    public get productModule(): string | undefined {
        return this['product_module'];
    }
}