

export class ResourceTypePrimitiveTypeHolder {
    private 'resource_type'?: string;
    public constructor() { 
    }
    public withResourceType(resourceType: string): ResourceTypePrimitiveTypeHolder {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
}