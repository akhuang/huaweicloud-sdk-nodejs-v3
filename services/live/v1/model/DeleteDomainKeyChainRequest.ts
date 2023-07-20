

export class DeleteDomainKeyChainRequest {
    public domain?: string;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): DeleteDomainKeyChainRequest {
        this['domain'] = domain;
        return this;
    }
}