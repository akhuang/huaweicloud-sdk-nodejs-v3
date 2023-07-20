

export class ShowWhitelistRequest {
    private 'whitelist_id'?: string;
    public constructor(whitelistId?: string) { 
        this['whitelist_id'] = whitelistId;
    }
    public withWhitelistId(whitelistId: string): ShowWhitelistRequest {
        this['whitelist_id'] = whitelistId;
        return this;
    }
    public set whitelistId(whitelistId: string  | undefined) {
        this['whitelist_id'] = whitelistId;
    }
    public get whitelistId(): string | undefined {
        return this['whitelist_id'];
    }
}