

export class UpdateAcceleratorOption {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateAcceleratorOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateAcceleratorOption {
        this['description'] = description;
        return this;
    }
}