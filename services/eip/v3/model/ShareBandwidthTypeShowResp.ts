

export class ShareBandwidthTypeShowResp {
    public id?: string;
    private 'bandwidth_type'?: string;
    private 'public_border_group'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'name_en'?: string;
    private 'name_zh'?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): ShareBandwidthTypeShowResp {
        this['id'] = id;
        return this;
    }
    public withBandwidthType(bandwidthType: string): ShareBandwidthTypeShowResp {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: string  | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType(): string | undefined {
        return this['bandwidth_type'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): ShareBandwidthTypeShowResp {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withCreatedAt(createdAt: string): ShareBandwidthTypeShowResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShareBandwidthTypeShowResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withNameEn(nameEn: string): ShareBandwidthTypeShowResp {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withNameZh(nameZh: string): ShareBandwidthTypeShowResp {
        this['name_zh'] = nameZh;
        return this;
    }
    public set nameZh(nameZh: string  | undefined) {
        this['name_zh'] = nameZh;
    }
    public get nameZh(): string | undefined {
        return this['name_zh'];
    }
    public withDescription(description: string): ShareBandwidthTypeShowResp {
        this['description'] = description;
        return this;
    }
}