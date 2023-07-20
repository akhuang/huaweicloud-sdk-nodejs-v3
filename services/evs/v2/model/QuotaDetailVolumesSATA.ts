import { QuotaDetail } from './QuotaDetail';


export class QuotaDetailVolumesSATA {
    private 'in_use'?: number;
    public limit?: number;
    public reserved?: number;
    public constructor(inUse?: number, limit?: number, reserved?: number) { 
        this['in_use'] = inUse;
        this['limit'] = limit;
        this['reserved'] = reserved;
    }
    public withInUse(inUse: number): QuotaDetailVolumesSATA {
        this['in_use'] = inUse;
        return this;
    }
    public set inUse(inUse: number  | undefined) {
        this['in_use'] = inUse;
    }
    public get inUse(): number | undefined {
        return this['in_use'];
    }
    public withLimit(limit: number): QuotaDetailVolumesSATA {
        this['limit'] = limit;
        return this;
    }
    public withReserved(reserved: number): QuotaDetailVolumesSATA {
        this['reserved'] = reserved;
        return this;
    }
}