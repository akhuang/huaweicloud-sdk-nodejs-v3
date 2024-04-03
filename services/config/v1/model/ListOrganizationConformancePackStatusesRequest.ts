

export class ListOrganizationConformancePackStatusesRequest {
    private 'organization_id'?: string;
    public limit?: number;
    public marker?: string;
    private 'organization_conformance_pack_id'?: string;
    private 'conformance_pack_name'?: string;
    public constructor(organizationId?: string) { 
        this['organization_id'] = organizationId;
    }
    public withOrganizationId(organizationId: string): ListOrganizationConformancePackStatusesRequest {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withLimit(limit: number): ListOrganizationConformancePackStatusesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListOrganizationConformancePackStatusesRequest {
        this['marker'] = marker;
        return this;
    }
    public withOrganizationConformancePackId(organizationConformancePackId: string): ListOrganizationConformancePackStatusesRequest {
        this['organization_conformance_pack_id'] = organizationConformancePackId;
        return this;
    }
    public set organizationConformancePackId(organizationConformancePackId: string  | undefined) {
        this['organization_conformance_pack_id'] = organizationConformancePackId;
    }
    public get organizationConformancePackId(): string | undefined {
        return this['organization_conformance_pack_id'];
    }
    public withConformancePackName(conformancePackName: string): ListOrganizationConformancePackStatusesRequest {
        this['conformance_pack_name'] = conformancePackName;
        return this;
    }
    public set conformancePackName(conformancePackName: string  | undefined) {
        this['conformance_pack_name'] = conformancePackName;
    }
    public get conformancePackName(): string | undefined {
        return this['conformance_pack_name'];
    }
}