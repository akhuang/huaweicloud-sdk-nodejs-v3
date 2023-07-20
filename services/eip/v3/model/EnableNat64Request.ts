

export class EnableNat64Request {
    private 'publicip_id'?: string;
    public constructor(publicipId?: string) { 
        this['publicip_id'] = publicipId;
    }
    public withPublicipId(publicipId: string): EnableNat64Request {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
}