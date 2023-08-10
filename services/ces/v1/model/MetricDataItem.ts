import { MetricInfo } from './MetricInfo';


export class MetricDataItem {
    public metric?: MetricInfo;
    public ttl?: number;
    private 'collect_time'?: number;
    public value?: number;
    public unit?: string;
    public type?: string;
    public constructor(metric?: MetricInfo, ttl?: number, collectTime?: number, value?: number) { 
        this['metric'] = metric;
        this['ttl'] = ttl;
        this['collect_time'] = collectTime;
        this['value'] = value;
    }
    public withMetric(metric: MetricInfo): MetricDataItem {
        this['metric'] = metric;
        return this;
    }
    public withTtl(ttl: number): MetricDataItem {
        this['ttl'] = ttl;
        return this;
    }
    public withCollectTime(collectTime: number): MetricDataItem {
        this['collect_time'] = collectTime;
        return this;
    }
    public set collectTime(collectTime: number  | undefined) {
        this['collect_time'] = collectTime;
    }
    public get collectTime(): number | undefined {
        return this['collect_time'];
    }
    public withValue(value: number): MetricDataItem {
        this['value'] = value;
        return this;
    }
    public withUnit(unit: string): MetricDataItem {
        this['unit'] = unit;
        return this;
    }
    public withType(type: string): MetricDataItem {
        this['type'] = type;
        return this;
    }
}