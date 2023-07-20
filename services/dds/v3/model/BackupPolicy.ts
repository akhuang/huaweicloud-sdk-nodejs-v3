

export class BackupPolicy {
    private 'keep_days'?: string;
    private 'start_time'?: string;
    public period?: string;
    public constructor(keepDays?: string) { 
        this['keep_days'] = keepDays;
    }
    public withKeepDays(keepDays: string): BackupPolicy {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: string  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): string | undefined {
        return this['keep_days'];
    }
    public withStartTime(startTime: string): BackupPolicy {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withPeriod(period: string): BackupPolicy {
        this['period'] = period;
        return this;
    }
}