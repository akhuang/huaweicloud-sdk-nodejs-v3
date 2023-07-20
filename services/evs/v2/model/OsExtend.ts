

export class OsExtend {
    private 'new_size'?: number;
    public constructor(newSize?: number) { 
        this['new_size'] = newSize;
    }
    public withNewSize(newSize: number): OsExtend {
        this['new_size'] = newSize;
        return this;
    }
    public set newSize(newSize: number  | undefined) {
        this['new_size'] = newSize;
    }
    public get newSize(): number | undefined {
        return this['new_size'];
    }
}