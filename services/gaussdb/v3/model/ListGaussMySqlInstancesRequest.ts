

export class ListGaussMySqlInstancesRequest {
    private 'X-Language'?: string;
    public id?: string;
    public name?: string;
    public type?: string;
    private 'datastore_type'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'private_ip'?: string;
    private 'readonly_private_ip'?: string;
    private 'proxy_ip'?: string;
    public offset?: number;
    public limit?: number;
    public tags?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListGaussMySqlInstancesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withId(id: string): ListGaussMySqlInstancesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListGaussMySqlInstancesRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ListGaussMySqlInstancesRequest {
        this['type'] = type;
        return this;
    }
    public withDatastoreType(datastoreType: string): ListGaussMySqlInstancesRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withVpcId(vpcId: string): ListGaussMySqlInstancesRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ListGaussMySqlInstancesRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withPrivateIp(privateIp: string): ListGaussMySqlInstancesRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withReadonlyPrivateIp(readonlyPrivateIp: string): ListGaussMySqlInstancesRequest {
        this['readonly_private_ip'] = readonlyPrivateIp;
        return this;
    }
    public set readonlyPrivateIp(readonlyPrivateIp: string  | undefined) {
        this['readonly_private_ip'] = readonlyPrivateIp;
    }
    public get readonlyPrivateIp(): string | undefined {
        return this['readonly_private_ip'];
    }
    public withProxyIp(proxyIp: string): ListGaussMySqlInstancesRequest {
        this['proxy_ip'] = proxyIp;
        return this;
    }
    public set proxyIp(proxyIp: string  | undefined) {
        this['proxy_ip'] = proxyIp;
    }
    public get proxyIp(): string | undefined {
        return this['proxy_ip'];
    }
    public withOffset(offset: number): ListGaussMySqlInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGaussMySqlInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withTags(tags: string): ListGaussMySqlInstancesRequest {
        this['tags'] = tags;
        return this;
    }
}