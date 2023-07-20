

export class UnscopedTokenInfoCatalog {
    public id?: string;
    private 'interface'?: string;
    public region?: string;
    private 'region_id'?: string;
    public url?: string;
    public constructor() { 
    }
    public withId(id: string): UnscopedTokenInfoCatalog {
        this['id'] = id;
        return this;
    }
    public withInterface(_interface: string): UnscopedTokenInfoCatalog {
        this['interface'] = _interface;
        return this;
    }
    public set _interface(_interface: string  | undefined) {
        this['interface'] = _interface;
    }
    public get _interface(): string | undefined {
        return this['interface'];
    }
    public withRegion(region: string): UnscopedTokenInfoCatalog {
        this['region'] = region;
        return this;
    }
    public withRegionId(regionId: string): UnscopedTokenInfoCatalog {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withUrl(url: string): UnscopedTokenInfoCatalog {
        this['url'] = url;
        return this;
    }
}