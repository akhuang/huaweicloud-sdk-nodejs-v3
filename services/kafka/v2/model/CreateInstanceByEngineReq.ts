import { BssParam } from './BssParam';
import { TagEntity } from './TagEntity';


export class CreateInstanceByEngineReq {
    public name?: string;
    public description?: string;
    public engine?: CreateInstanceByEngineReqEngineEnum | string;
    private 'engine_version'?: CreateInstanceByEngineReqEngineVersionEnum | string;
    private 'broker_num'?: number;
    private 'storage_space'?: number;
    private 'access_user'?: string;
    public password?: string;
    private 'vpc_id'?: string;
    private 'security_group_id'?: string;
    private 'subnet_id'?: string;
    private 'available_zones'?: Array<string>;
    private 'product_id'?: string;
    private 'kafka_manager_user'?: string;
    private 'kafka_manager_password'?: string;
    private 'maintain_begin'?: string;
    private 'maintain_end'?: string;
    private 'enable_publicip'?: boolean;
    private 'publicip_id'?: string;
    private 'ssl_enable'?: boolean;
    private 'kafka_security_protocol'?: string;
    private 'sasl_enabled_mechanisms'?: Array<CreateInstanceByEngineReqSaslEnabledMechanismsEnum> | Array<string>;
    private 'retention_policy'?: CreateInstanceByEngineReqRetentionPolicyEnum | string;
    private 'disk_encrypted_enable'?: boolean;
    private 'disk_encrypted_key'?: string;
    private 'connector_enable'?: boolean;
    private 'enable_auto_topic'?: boolean;
    private 'storage_spec_code'?: CreateInstanceByEngineReqStorageSpecCodeEnum | string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<TagEntity>;
    private 'arch_type'?: string;
    private 'vpc_client_plain'?: boolean;
    private 'bss_param'?: BssParam;
    public constructor(name?: string, engine?: string, engineVersion?: string, brokerNum?: number, storageSpace?: number, vpcId?: string, securityGroupId?: string, subnetId?: string, availableZones?: Array<string>, productId?: string, storageSpecCode?: string) { 
        this['name'] = name;
        this['engine'] = engine;
        this['engine_version'] = engineVersion;
        this['broker_num'] = brokerNum;
        this['storage_space'] = storageSpace;
        this['vpc_id'] = vpcId;
        this['security_group_id'] = securityGroupId;
        this['subnet_id'] = subnetId;
        this['available_zones'] = availableZones;
        this['product_id'] = productId;
        this['storage_spec_code'] = storageSpecCode;
    }
    public withName(name: string): CreateInstanceByEngineReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateInstanceByEngineReq {
        this['description'] = description;
        return this;
    }
    public withEngine(engine: CreateInstanceByEngineReqEngineEnum | string): CreateInstanceByEngineReq {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: CreateInstanceByEngineReqEngineVersionEnum | string): CreateInstanceByEngineReq {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: CreateInstanceByEngineReqEngineVersionEnum | string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): CreateInstanceByEngineReqEngineVersionEnum | string | undefined {
        return this['engine_version'];
    }
    public withBrokerNum(brokerNum: number): CreateInstanceByEngineReq {
        this['broker_num'] = brokerNum;
        return this;
    }
    public set brokerNum(brokerNum: number  | undefined) {
        this['broker_num'] = brokerNum;
    }
    public get brokerNum(): number | undefined {
        return this['broker_num'];
    }
    public withStorageSpace(storageSpace: number): CreateInstanceByEngineReq {
        this['storage_space'] = storageSpace;
        return this;
    }
    public set storageSpace(storageSpace: number  | undefined) {
        this['storage_space'] = storageSpace;
    }
    public get storageSpace(): number | undefined {
        return this['storage_space'];
    }
    public withAccessUser(accessUser: string): CreateInstanceByEngineReq {
        this['access_user'] = accessUser;
        return this;
    }
    public set accessUser(accessUser: string  | undefined) {
        this['access_user'] = accessUser;
    }
    public get accessUser(): string | undefined {
        return this['access_user'];
    }
    public withPassword(password: string): CreateInstanceByEngineReq {
        this['password'] = password;
        return this;
    }
    public withVpcId(vpcId: string): CreateInstanceByEngineReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateInstanceByEngineReq {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withSubnetId(subnetId: string): CreateInstanceByEngineReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withAvailableZones(availableZones: Array<string>): CreateInstanceByEngineReq {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
    public withProductId(productId: string): CreateInstanceByEngineReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withKafkaManagerUser(kafkaManagerUser: string): CreateInstanceByEngineReq {
        this['kafka_manager_user'] = kafkaManagerUser;
        return this;
    }
    public set kafkaManagerUser(kafkaManagerUser: string  | undefined) {
        this['kafka_manager_user'] = kafkaManagerUser;
    }
    public get kafkaManagerUser(): string | undefined {
        return this['kafka_manager_user'];
    }
    public withKafkaManagerPassword(kafkaManagerPassword: string): CreateInstanceByEngineReq {
        this['kafka_manager_password'] = kafkaManagerPassword;
        return this;
    }
    public set kafkaManagerPassword(kafkaManagerPassword: string  | undefined) {
        this['kafka_manager_password'] = kafkaManagerPassword;
    }
    public get kafkaManagerPassword(): string | undefined {
        return this['kafka_manager_password'];
    }
    public withMaintainBegin(maintainBegin: string): CreateInstanceByEngineReq {
        this['maintain_begin'] = maintainBegin;
        return this;
    }
    public set maintainBegin(maintainBegin: string  | undefined) {
        this['maintain_begin'] = maintainBegin;
    }
    public get maintainBegin(): string | undefined {
        return this['maintain_begin'];
    }
    public withMaintainEnd(maintainEnd: string): CreateInstanceByEngineReq {
        this['maintain_end'] = maintainEnd;
        return this;
    }
    public set maintainEnd(maintainEnd: string  | undefined) {
        this['maintain_end'] = maintainEnd;
    }
    public get maintainEnd(): string | undefined {
        return this['maintain_end'];
    }
    public withEnablePublicip(enablePublicip: boolean): CreateInstanceByEngineReq {
        this['enable_publicip'] = enablePublicip;
        return this;
    }
    public set enablePublicip(enablePublicip: boolean  | undefined) {
        this['enable_publicip'] = enablePublicip;
    }
    public get enablePublicip(): boolean | undefined {
        return this['enable_publicip'];
    }
    public withPublicipId(publicipId: string): CreateInstanceByEngineReq {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withSslEnable(sslEnable: boolean): CreateInstanceByEngineReq {
        this['ssl_enable'] = sslEnable;
        return this;
    }
    public set sslEnable(sslEnable: boolean  | undefined) {
        this['ssl_enable'] = sslEnable;
    }
    public get sslEnable(): boolean | undefined {
        return this['ssl_enable'];
    }
    public withKafkaSecurityProtocol(kafkaSecurityProtocol: string): CreateInstanceByEngineReq {
        this['kafka_security_protocol'] = kafkaSecurityProtocol;
        return this;
    }
    public set kafkaSecurityProtocol(kafkaSecurityProtocol: string  | undefined) {
        this['kafka_security_protocol'] = kafkaSecurityProtocol;
    }
    public get kafkaSecurityProtocol(): string | undefined {
        return this['kafka_security_protocol'];
    }
    public withSaslEnabledMechanisms(saslEnabledMechanisms: Array<CreateInstanceByEngineReqSaslEnabledMechanismsEnum> | Array<string>): CreateInstanceByEngineReq {
        this['sasl_enabled_mechanisms'] = saslEnabledMechanisms;
        return this;
    }
    public set saslEnabledMechanisms(saslEnabledMechanisms: Array<CreateInstanceByEngineReqSaslEnabledMechanismsEnum> | Array<string>  | undefined) {
        this['sasl_enabled_mechanisms'] = saslEnabledMechanisms;
    }
    public get saslEnabledMechanisms(): Array<CreateInstanceByEngineReqSaslEnabledMechanismsEnum> | Array<string> | undefined {
        return this['sasl_enabled_mechanisms'];
    }
    public withRetentionPolicy(retentionPolicy: CreateInstanceByEngineReqRetentionPolicyEnum | string): CreateInstanceByEngineReq {
        this['retention_policy'] = retentionPolicy;
        return this;
    }
    public set retentionPolicy(retentionPolicy: CreateInstanceByEngineReqRetentionPolicyEnum | string  | undefined) {
        this['retention_policy'] = retentionPolicy;
    }
    public get retentionPolicy(): CreateInstanceByEngineReqRetentionPolicyEnum | string | undefined {
        return this['retention_policy'];
    }
    public withDiskEncryptedEnable(diskEncryptedEnable: boolean): CreateInstanceByEngineReq {
        this['disk_encrypted_enable'] = diskEncryptedEnable;
        return this;
    }
    public set diskEncryptedEnable(diskEncryptedEnable: boolean  | undefined) {
        this['disk_encrypted_enable'] = diskEncryptedEnable;
    }
    public get diskEncryptedEnable(): boolean | undefined {
        return this['disk_encrypted_enable'];
    }
    public withDiskEncryptedKey(diskEncryptedKey: string): CreateInstanceByEngineReq {
        this['disk_encrypted_key'] = diskEncryptedKey;
        return this;
    }
    public set diskEncryptedKey(diskEncryptedKey: string  | undefined) {
        this['disk_encrypted_key'] = diskEncryptedKey;
    }
    public get diskEncryptedKey(): string | undefined {
        return this['disk_encrypted_key'];
    }
    public withConnectorEnable(connectorEnable: boolean): CreateInstanceByEngineReq {
        this['connector_enable'] = connectorEnable;
        return this;
    }
    public set connectorEnable(connectorEnable: boolean  | undefined) {
        this['connector_enable'] = connectorEnable;
    }
    public get connectorEnable(): boolean | undefined {
        return this['connector_enable'];
    }
    public withEnableAutoTopic(enableAutoTopic: boolean): CreateInstanceByEngineReq {
        this['enable_auto_topic'] = enableAutoTopic;
        return this;
    }
    public set enableAutoTopic(enableAutoTopic: boolean  | undefined) {
        this['enable_auto_topic'] = enableAutoTopic;
    }
    public get enableAutoTopic(): boolean | undefined {
        return this['enable_auto_topic'];
    }
    public withStorageSpecCode(storageSpecCode: CreateInstanceByEngineReqStorageSpecCodeEnum | string): CreateInstanceByEngineReq {
        this['storage_spec_code'] = storageSpecCode;
        return this;
    }
    public set storageSpecCode(storageSpecCode: CreateInstanceByEngineReqStorageSpecCodeEnum | string  | undefined) {
        this['storage_spec_code'] = storageSpecCode;
    }
    public get storageSpecCode(): CreateInstanceByEngineReqStorageSpecCodeEnum | string | undefined {
        return this['storage_spec_code'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateInstanceByEngineReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<TagEntity>): CreateInstanceByEngineReq {
        this['tags'] = tags;
        return this;
    }
    public withArchType(archType: string): CreateInstanceByEngineReq {
        this['arch_type'] = archType;
        return this;
    }
    public set archType(archType: string  | undefined) {
        this['arch_type'] = archType;
    }
    public get archType(): string | undefined {
        return this['arch_type'];
    }
    public withVpcClientPlain(vpcClientPlain: boolean): CreateInstanceByEngineReq {
        this['vpc_client_plain'] = vpcClientPlain;
        return this;
    }
    public set vpcClientPlain(vpcClientPlain: boolean  | undefined) {
        this['vpc_client_plain'] = vpcClientPlain;
    }
    public get vpcClientPlain(): boolean | undefined {
        return this['vpc_client_plain'];
    }
    public withBssParam(bssParam: BssParam): CreateInstanceByEngineReq {
        this['bss_param'] = bssParam;
        return this;
    }
    public set bssParam(bssParam: BssParam  | undefined) {
        this['bss_param'] = bssParam;
    }
    public get bssParam(): BssParam | undefined {
        return this['bss_param'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceByEngineReqEngineEnum {
    KAFKA = 'kafka'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceByEngineReqEngineVersionEnum {
    E_1_1_0 = '1.1.0',
    E_2_7 = '2.7'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceByEngineReqSaslEnabledMechanismsEnum {
    PLAIN = 'PLAIN',
    SCRAM_SHA_512 = 'SCRAM-SHA-512'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceByEngineReqRetentionPolicyEnum {
    TIME_BASE = 'time_base',
    PRODUCE_REJECT = 'produce_reject'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceByEngineReqStorageSpecCodeEnum {
    DMS_PHYSICAL_STORAGE_HIGH_V2 = 'dms.physical.storage.high.v2',
    DMS_PHYSICAL_STORAGE_ULTRA_V2 = 'dms.physical.storage.ultra.v2'
}
