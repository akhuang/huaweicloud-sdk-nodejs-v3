


export class Vpc {
    public id: string;
    public name: string;
    public cidr: string;
    public description: string; 
    public status: VpcStatusEnum;
    private 'enterprise_project_id': string | undefined;
    private 'tenant_id': string | undefined;
    private 'created_at': Date | undefined;
    private 'updated_at': Date | undefined;
    public constructor(id?: any, name?: any, cidr?: any, description?: any, routes?: any, status?: any, enterpriseProjectId?: any, tenantId?: any, createdAt?: any, updatedAt?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['cidr'] = cidr;
        this['description'] = description;
        this['status'] = status;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['tenant_id'] = tenantId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): Vpc {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Vpc {
        this['name'] = name;
        return this;
    }
    public withCidr(cidr: string): Vpc {
        this['cidr'] = cidr;
        return this;
    }
    public withDescription(description: string): Vpc {
        this['description'] = description;
        return this;
    }
    public withStatus(status: VpcStatusEnum): Vpc {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Vpc {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withTenantId(tenantId: string): Vpc {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withCreatedAt(createdAt: Date): Vpc {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Vpc {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VpcStatusEnum {
    CREATING = 'CREATING',
    OK = 'OK',
    ERROR = 'ERROR'
}
