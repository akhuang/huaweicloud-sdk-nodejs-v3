import { KafkaSecurity } from './KafkaSecurity';


export class Endpoint {
    private 'db_type'?: EndpointDbTypeEnum | string;
    private 'az_code'?: string;
    public region?: string;
    private 'inst_id'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'project_id'?: string;
    private 'db_name'?: string;
    private 'db_password'?: string;
    private 'db_port'?: number;
    private 'db_user'?: string;
    private 'inst_name'?: string;
    public ip?: string;
    private 'mongo_ha_mode'?: string;
    private 'safe_mode'?: number;
    private 'ssl_cert_password'?: string;
    private 'ssl_cert_check_sum'?: string;
    private 'ssl_cert_key'?: string;
    private 'ssl_cert_name'?: string;
    private 'ssl_link'?: boolean;
    public topic?: string;
    private 'cluster_mode'?: EndpointClusterModeEnum | string;
    private 'kafka_security_config'?: KafkaSecurity;
    public constructor() { 
    }
    public withDbType(dbType: EndpointDbTypeEnum | string): Endpoint {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: EndpointDbTypeEnum | string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): EndpointDbTypeEnum | string | undefined {
        return this['db_type'];
    }
    public withAzCode(azCode: string): Endpoint {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withRegion(region: string): Endpoint {
        this['region'] = region;
        return this;
    }
    public withInstId(instId: string): Endpoint {
        this['inst_id'] = instId;
        return this;
    }
    public set instId(instId: string  | undefined) {
        this['inst_id'] = instId;
    }
    public get instId(): string | undefined {
        return this['inst_id'];
    }
    public withVpcId(vpcId: string): Endpoint {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): Endpoint {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): Endpoint {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withProjectId(projectId: string): Endpoint {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDbName(dbName: string): Endpoint {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withDbPassword(dbPassword: string): Endpoint {
        this['db_password'] = dbPassword;
        return this;
    }
    public set dbPassword(dbPassword: string  | undefined) {
        this['db_password'] = dbPassword;
    }
    public get dbPassword(): string | undefined {
        return this['db_password'];
    }
    public withDbPort(dbPort: number): Endpoint {
        this['db_port'] = dbPort;
        return this;
    }
    public set dbPort(dbPort: number  | undefined) {
        this['db_port'] = dbPort;
    }
    public get dbPort(): number | undefined {
        return this['db_port'];
    }
    public withDbUser(dbUser: string): Endpoint {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: string  | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser(): string | undefined {
        return this['db_user'];
    }
    public withInstName(instName: string): Endpoint {
        this['inst_name'] = instName;
        return this;
    }
    public set instName(instName: string  | undefined) {
        this['inst_name'] = instName;
    }
    public get instName(): string | undefined {
        return this['inst_name'];
    }
    public withIp(ip: string): Endpoint {
        this['ip'] = ip;
        return this;
    }
    public withMongoHaMode(mongoHaMode: string): Endpoint {
        this['mongo_ha_mode'] = mongoHaMode;
        return this;
    }
    public set mongoHaMode(mongoHaMode: string  | undefined) {
        this['mongo_ha_mode'] = mongoHaMode;
    }
    public get mongoHaMode(): string | undefined {
        return this['mongo_ha_mode'];
    }
    public withSafeMode(safeMode: number): Endpoint {
        this['safe_mode'] = safeMode;
        return this;
    }
    public set safeMode(safeMode: number  | undefined) {
        this['safe_mode'] = safeMode;
    }
    public get safeMode(): number | undefined {
        return this['safe_mode'];
    }
    public withSslCertPassword(sslCertPassword: string): Endpoint {
        this['ssl_cert_password'] = sslCertPassword;
        return this;
    }
    public set sslCertPassword(sslCertPassword: string  | undefined) {
        this['ssl_cert_password'] = sslCertPassword;
    }
    public get sslCertPassword(): string | undefined {
        return this['ssl_cert_password'];
    }
    public withSslCertCheckSum(sslCertCheckSum: string): Endpoint {
        this['ssl_cert_check_sum'] = sslCertCheckSum;
        return this;
    }
    public set sslCertCheckSum(sslCertCheckSum: string  | undefined) {
        this['ssl_cert_check_sum'] = sslCertCheckSum;
    }
    public get sslCertCheckSum(): string | undefined {
        return this['ssl_cert_check_sum'];
    }
    public withSslCertKey(sslCertKey: string): Endpoint {
        this['ssl_cert_key'] = sslCertKey;
        return this;
    }
    public set sslCertKey(sslCertKey: string  | undefined) {
        this['ssl_cert_key'] = sslCertKey;
    }
    public get sslCertKey(): string | undefined {
        return this['ssl_cert_key'];
    }
    public withSslCertName(sslCertName: string): Endpoint {
        this['ssl_cert_name'] = sslCertName;
        return this;
    }
    public set sslCertName(sslCertName: string  | undefined) {
        this['ssl_cert_name'] = sslCertName;
    }
    public get sslCertName(): string | undefined {
        return this['ssl_cert_name'];
    }
    public withSslLink(sslLink: boolean): Endpoint {
        this['ssl_link'] = sslLink;
        return this;
    }
    public set sslLink(sslLink: boolean  | undefined) {
        this['ssl_link'] = sslLink;
    }
    public get sslLink(): boolean | undefined {
        return this['ssl_link'];
    }
    public withTopic(topic: string): Endpoint {
        this['topic'] = topic;
        return this;
    }
    public withClusterMode(clusterMode: EndpointClusterModeEnum | string): Endpoint {
        this['cluster_mode'] = clusterMode;
        return this;
    }
    public set clusterMode(clusterMode: EndpointClusterModeEnum | string  | undefined) {
        this['cluster_mode'] = clusterMode;
    }
    public get clusterMode(): EndpointClusterModeEnum | string | undefined {
        return this['cluster_mode'];
    }
    public withKafkaSecurityConfig(kafkaSecurityConfig: KafkaSecurity): Endpoint {
        this['kafka_security_config'] = kafkaSecurityConfig;
        return this;
    }
    public set kafkaSecurityConfig(kafkaSecurityConfig: KafkaSecurity  | undefined) {
        this['kafka_security_config'] = kafkaSecurityConfig;
    }
    public get kafkaSecurityConfig(): KafkaSecurity | undefined {
        return this['kafka_security_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EndpointDbTypeEnum {
    MYSQL = 'mysql',
    MONGODB = 'mongodb',
    GAUSSDBV5 = 'gaussdbv5',
    POSTGRESQL = 'postgresql',
    KAFKA = 'kafka',
    GAUSSDBV5HA = 'gaussdbv5ha',
    TAURUS = 'taurus'
}
/**
    * @export
    * @enum {string}
    */
export enum EndpointClusterModeEnum {
    SHARDING4_0 = 'Sharding4.0+'
}
