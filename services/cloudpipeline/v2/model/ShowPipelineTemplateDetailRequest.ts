

export class ShowPipelineTemplateDetailRequest {
    private 'tenant_id'?: string;
    private 'template_id'?: string;
    public constructor(tenantId?: string, templateId?: string) { 
        this['tenant_id'] = tenantId;
        this['template_id'] = templateId;
    }
    public withTenantId(tenantId: string): ShowPipelineTemplateDetailRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withTemplateId(templateId: string): ShowPipelineTemplateDetailRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
}