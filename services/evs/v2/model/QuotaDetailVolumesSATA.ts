import { QuotaDetail } from './QuotaDetail';


export class QuotaDetailVolumesSATA {
    private 'in_use': number | undefined;
    public limit: number;
    public reserved: number;
    public allocated: number;
    public constructor(inUse?: any, limit?: any, reserved?: any, allocated?: any) { 
        this['in_use'] = inUse;
        this['limit'] = limit;
        this['reserved'] = reserved;
        this['allocated'] = allocated;
    }
    public withInUse(inUse: number): QuotaDetailVolumesSATA {
        this['in_use'] = inUse;
        return this;
    }
    public set inUse(inUse: number | undefined) {
        this['in_use'] = inUse;
    }
    public get inUse() {
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
    public withAllocated(allocated: number): QuotaDetailVolumesSATA {
        this['allocated'] = allocated;
        return this;
    }
}