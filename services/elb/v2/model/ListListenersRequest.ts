

export class ListListenersRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public id?: string;
    public name?: string;
    public description?: string;
    private 'loadbalancer_id'?: string;
    private 'connection_limit'?: number;
    private 'admin_state_up'?: boolean;
    private 'default_pool_id'?: string;
    private 'default_tls_container_ref'?: string;
    private 'client_ca_tls_container_ref'?: string;
    public protocol?: string;
    private 'protocol_port'?: number;
    private 'tls_ciphers_policy'?: string;
    private 'tls_container_id'?: string;
    private 'http2_enable'?: boolean;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListListenersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListListenersRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListListenersRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withId(id: string): ListListenersRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListListenersRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListListenersRequest {
        this['description'] = description;
        return this;
    }
    public withLoadbalancerId(loadbalancerId: string): ListListenersRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withConnectionLimit(connectionLimit: number): ListListenersRequest {
        this['connection_limit'] = connectionLimit;
        return this;
    }
    public set connectionLimit(connectionLimit: number  | undefined) {
        this['connection_limit'] = connectionLimit;
    }
    public get connectionLimit(): number | undefined {
        return this['connection_limit'];
    }
    public withAdminStateUp(adminStateUp: boolean): ListListenersRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withDefaultPoolId(defaultPoolId: string): ListListenersRequest {
        this['default_pool_id'] = defaultPoolId;
        return this;
    }
    public set defaultPoolId(defaultPoolId: string  | undefined) {
        this['default_pool_id'] = defaultPoolId;
    }
    public get defaultPoolId(): string | undefined {
        return this['default_pool_id'];
    }
    public withDefaultTlsContainerRef(defaultTlsContainerRef: string): ListListenersRequest {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
        return this;
    }
    public set defaultTlsContainerRef(defaultTlsContainerRef: string  | undefined) {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
    }
    public get defaultTlsContainerRef(): string | undefined {
        return this['default_tls_container_ref'];
    }
    public withClientCaTlsContainerRef(clientCaTlsContainerRef: string): ListListenersRequest {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
        return this;
    }
    public set clientCaTlsContainerRef(clientCaTlsContainerRef: string  | undefined) {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
    }
    public get clientCaTlsContainerRef(): string | undefined {
        return this['client_ca_tls_container_ref'];
    }
    public withProtocol(protocol: string): ListListenersRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withProtocolPort(protocolPort: number): ListListenersRequest {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withTlsCiphersPolicy(tlsCiphersPolicy: string): ListListenersRequest {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
        return this;
    }
    public set tlsCiphersPolicy(tlsCiphersPolicy: string  | undefined) {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
    }
    public get tlsCiphersPolicy(): string | undefined {
        return this['tls_ciphers_policy'];
    }
    public withTlsContainerId(tlsContainerId: string): ListListenersRequest {
        this['tls_container_id'] = tlsContainerId;
        return this;
    }
    public set tlsContainerId(tlsContainerId: string  | undefined) {
        this['tls_container_id'] = tlsContainerId;
    }
    public get tlsContainerId(): string | undefined {
        return this['tls_container_id'];
    }
    public withHttp2Enable(http2Enable: boolean): ListListenersRequest {
        this['http2_enable'] = http2Enable;
        return this;
    }
    public set http2Enable(http2Enable: boolean  | undefined) {
        this['http2_enable'] = http2Enable;
    }
    public get http2Enable(): boolean | undefined {
        return this['http2_enable'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListListenersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}