import { DomainNameEntity } from './DomainNameEntity';


export class DomainNameInfo {
    private 'support_public_resolve'?: boolean;
    private 'is_latest_rules'?: boolean;
    private 'zone_name'?: string;
    private 'history_domain_names'?: Array<DomainNameEntity>;
    public constructor() { 
    }
    public withSupportPublicResolve(supportPublicResolve: boolean): DomainNameInfo {
        this['support_public_resolve'] = supportPublicResolve;
        return this;
    }
    public set supportPublicResolve(supportPublicResolve: boolean  | undefined) {
        this['support_public_resolve'] = supportPublicResolve;
    }
    public get supportPublicResolve(): boolean | undefined {
        return this['support_public_resolve'];
    }
    public withIsLatestRules(isLatestRules: boolean): DomainNameInfo {
        this['is_latest_rules'] = isLatestRules;
        return this;
    }
    public set isLatestRules(isLatestRules: boolean  | undefined) {
        this['is_latest_rules'] = isLatestRules;
    }
    public get isLatestRules(): boolean | undefined {
        return this['is_latest_rules'];
    }
    public withZoneName(zoneName: string): DomainNameInfo {
        this['zone_name'] = zoneName;
        return this;
    }
    public set zoneName(zoneName: string  | undefined) {
        this['zone_name'] = zoneName;
    }
    public get zoneName(): string | undefined {
        return this['zone_name'];
    }
    public withHistoryDomainNames(historyDomainNames: Array<DomainNameEntity>): DomainNameInfo {
        this['history_domain_names'] = historyDomainNames;
        return this;
    }
    public set historyDomainNames(historyDomainNames: Array<DomainNameEntity>  | undefined) {
        this['history_domain_names'] = historyDomainNames;
    }
    public get historyDomainNames(): Array<DomainNameEntity> | undefined {
        return this['history_domain_names'];
    }
}