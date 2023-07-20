

export class ResourcesPlan {
    private 'period_type'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'min_capacity'?: number;
    private 'max_capacity'?: number;
    public constructor(periodType?: string, startTime?: string, endTime?: string, minCapacity?: number, maxCapacity?: number) { 
        this['period_type'] = periodType;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['min_capacity'] = minCapacity;
        this['max_capacity'] = maxCapacity;
    }
    public withPeriodType(periodType: string): ResourcesPlan {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): string | undefined {
        return this['period_type'];
    }
    public withStartTime(startTime: string): ResourcesPlan {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ResourcesPlan {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withMinCapacity(minCapacity: number): ResourcesPlan {
        this['min_capacity'] = minCapacity;
        return this;
    }
    public set minCapacity(minCapacity: number  | undefined) {
        this['min_capacity'] = minCapacity;
    }
    public get minCapacity(): number | undefined {
        return this['min_capacity'];
    }
    public withMaxCapacity(maxCapacity: number): ResourcesPlan {
        this['max_capacity'] = maxCapacity;
        return this;
    }
    public set maxCapacity(maxCapacity: number  | undefined) {
        this['max_capacity'] = maxCapacity;
    }
    public get maxCapacity(): number | undefined {
        return this['max_capacity'];
    }
}