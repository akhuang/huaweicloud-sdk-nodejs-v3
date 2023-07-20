

export class IdentityToken {
    public id?: string;
    private 'duration_seconds'?: number;
    public constructor() { 
    }
    public withId(id: string): IdentityToken {
        this['id'] = id;
        return this;
    }
    public withDurationSeconds(durationSeconds: number): IdentityToken {
        this['duration_seconds'] = durationSeconds;
        return this;
    }
    public set durationSeconds(durationSeconds: number  | undefined) {
        this['duration_seconds'] = durationSeconds;
    }
    public get durationSeconds(): number | undefined {
        return this['duration_seconds'];
    }
}