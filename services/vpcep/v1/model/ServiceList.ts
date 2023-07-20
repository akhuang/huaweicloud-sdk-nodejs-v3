import { PortList } from './PortList';
import { TagList } from './TagList';


export class ServiceList {
    public id?: string;
    private 'port_id'?: string;
    private 'service_name'?: string;
    private 'server_type'?: string;
    private 'vpc_id'?: string;
    private 'approval_enabled'?: boolean;
    public status?: ServiceListStatusEnum | string;
    private 'service_type'?: ServiceListServiceTypeEnum | string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'project_id'?: string;
    private 'domain_id'?: string;
    public ports?: Array<PortList>;
    public tags?: Array<TagList>;
    private 'connection_count'?: number;
    private 'tcp_proxy'?: ServiceListTcpProxyEnum | string;
    public error?: Array<Error>;
    public description?: string;
    private 'public_border_group'?: string;
    private 'enable_policy'?: boolean;
    public constructor() { 
    }
    public withId(id: string): ServiceList {
        this['id'] = id;
        return this;
    }
    public withPortId(portId: string): ServiceList {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withServiceName(serviceName: string): ServiceList {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withServerType(serverType: string): ServiceList {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): string | undefined {
        return this['server_type'];
    }
    public withVpcId(vpcId: string): ServiceList {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withApprovalEnabled(approvalEnabled: boolean): ServiceList {
        this['approval_enabled'] = approvalEnabled;
        return this;
    }
    public set approvalEnabled(approvalEnabled: boolean  | undefined) {
        this['approval_enabled'] = approvalEnabled;
    }
    public get approvalEnabled(): boolean | undefined {
        return this['approval_enabled'];
    }
    public withStatus(status: ServiceListStatusEnum | string): ServiceList {
        this['status'] = status;
        return this;
    }
    public withServiceType(serviceType: ServiceListServiceTypeEnum | string): ServiceList {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ServiceListServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): ServiceListServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
    public withCreatedAt(createdAt: string): ServiceList {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ServiceList {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withProjectId(projectId: string): ServiceList {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDomainId(domainId: string): ServiceList {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withPorts(ports: Array<PortList>): ServiceList {
        this['ports'] = ports;
        return this;
    }
    public withTags(tags: Array<TagList>): ServiceList {
        this['tags'] = tags;
        return this;
    }
    public withConnectionCount(connectionCount: number): ServiceList {
        this['connection_count'] = connectionCount;
        return this;
    }
    public set connectionCount(connectionCount: number  | undefined) {
        this['connection_count'] = connectionCount;
    }
    public get connectionCount(): number | undefined {
        return this['connection_count'];
    }
    public withTcpProxy(tcpProxy: ServiceListTcpProxyEnum | string): ServiceList {
        this['tcp_proxy'] = tcpProxy;
        return this;
    }
    public set tcpProxy(tcpProxy: ServiceListTcpProxyEnum | string  | undefined) {
        this['tcp_proxy'] = tcpProxy;
    }
    public get tcpProxy(): ServiceListTcpProxyEnum | string | undefined {
        return this['tcp_proxy'];
    }
    public withError(error: Array<Error>): ServiceList {
        this['error'] = error;
        return this;
    }
    public withDescription(description: string): ServiceList {
        this['description'] = description;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): ServiceList {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withEnablePolicy(enablePolicy: boolean): ServiceList {
        this['enable_policy'] = enablePolicy;
        return this;
    }
    public set enablePolicy(enablePolicy: boolean  | undefined) {
        this['enable_policy'] = enablePolicy;
    }
    public get enablePolicy(): boolean | undefined {
        return this['enable_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ServiceListStatusEnum {
    CREATING = 'creating',
    AVAILABLE = 'available',
    FAILED = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum ServiceListServiceTypeEnum {
    VM = 'VM',
    VIP = 'VIP',
    LB = 'LB'
}
/**
    * @export
    * @enum {string}
    */
export enum ServiceListTcpProxyEnum {
    CLOSE = 'close',
    TOA_OPEN = 'toa_open',
    PROXY_OPEN = 'proxy_open',
    OPEN = 'open',
    PROXY_VNI = 'proxy_vni'
}
