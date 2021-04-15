

export class AgencyTokenAssumerole {
    private 'domain_id'?: string | undefined;
    private 'domain_name'?: string | undefined;
    private 'agency_name': string | undefined;
    public constructor(agencyName?: any) { 
        this['agency_name'] = agencyName;
    }
    public withDomainId(domainId: string): AgencyTokenAssumerole {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): AgencyTokenAssumerole {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withAgencyName(agencyName: string): AgencyTokenAssumerole {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName() {
        return this['agency_name'];
    }
}