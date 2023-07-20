import { InstanceTagItem } from './InstanceTagItem';
import { MysqlBackupStrategy } from './MysqlBackupStrategy';
import { MysqlChargeInfo } from './MysqlChargeInfo';
import { MysqlDatastoreWithKernelVersion } from './MysqlDatastoreWithKernelVersion';
import { MysqlFlavorInfo } from './MysqlFlavorInfo';
import { MysqlVolumeInfo } from './MysqlVolumeInfo';


export class MysqlInstanceListInfo {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'private_ips'?: Array<string>;
    private 'proxy_ips'?: Array<string>;
    private 'readonly_private_ips'?: Array<string>;
    private 'public_ips'?: Array<string>;
    public port?: string;
    public type?: string;
    public region?: string;
    public datastore?: MysqlDatastoreWithKernelVersion;
    public created?: string;
    public updated?: string;
    private 'db_user_name'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'flavor_ref'?: string;
    private 'flavor_info'?: MysqlFlavorInfo;
    public volume?: MysqlVolumeInfo;
    private 'backup_strategy'?: MysqlBackupStrategy;
    private 'enterprise_project_id'?: string;
    private 'time_zone'?: string;
    private 'charge_info'?: MysqlChargeInfo;
    private 'dedicated_resource_id'?: string;
    public tags?: Array<InstanceTagItem>;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): MysqlInstanceListInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MysqlInstanceListInfo {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): MysqlInstanceListInfo {
        this['status'] = status;
        return this;
    }
    public withPrivateIps(privateIps: Array<string>): MysqlInstanceListInfo {
        this['private_ips'] = privateIps;
        return this;
    }
    public set privateIps(privateIps: Array<string>  | undefined) {
        this['private_ips'] = privateIps;
    }
    public get privateIps(): Array<string> | undefined {
        return this['private_ips'];
    }
    public withProxyIps(proxyIps: Array<string>): MysqlInstanceListInfo {
        this['proxy_ips'] = proxyIps;
        return this;
    }
    public set proxyIps(proxyIps: Array<string>  | undefined) {
        this['proxy_ips'] = proxyIps;
    }
    public get proxyIps(): Array<string> | undefined {
        return this['proxy_ips'];
    }
    public withReadonlyPrivateIps(readonlyPrivateIps: Array<string>): MysqlInstanceListInfo {
        this['readonly_private_ips'] = readonlyPrivateIps;
        return this;
    }
    public set readonlyPrivateIps(readonlyPrivateIps: Array<string>  | undefined) {
        this['readonly_private_ips'] = readonlyPrivateIps;
    }
    public get readonlyPrivateIps(): Array<string> | undefined {
        return this['readonly_private_ips'];
    }
    public withPublicIps(publicIps: Array<string>): MysqlInstanceListInfo {
        this['public_ips'] = publicIps;
        return this;
    }
    public set publicIps(publicIps: Array<string>  | undefined) {
        this['public_ips'] = publicIps;
    }
    public get publicIps(): Array<string> | undefined {
        return this['public_ips'];
    }
    public withPort(port: string): MysqlInstanceListInfo {
        this['port'] = port;
        return this;
    }
    public withType(type: string): MysqlInstanceListInfo {
        this['type'] = type;
        return this;
    }
    public withRegion(region: string): MysqlInstanceListInfo {
        this['region'] = region;
        return this;
    }
    public withDatastore(datastore: MysqlDatastoreWithKernelVersion): MysqlInstanceListInfo {
        this['datastore'] = datastore;
        return this;
    }
    public withCreated(created: string): MysqlInstanceListInfo {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): MysqlInstanceListInfo {
        this['updated'] = updated;
        return this;
    }
    public withDbUserName(dbUserName: string): MysqlInstanceListInfo {
        this['db_user_name'] = dbUserName;
        return this;
    }
    public set dbUserName(dbUserName: string  | undefined) {
        this['db_user_name'] = dbUserName;
    }
    public get dbUserName(): string | undefined {
        return this['db_user_name'];
    }
    public withVpcId(vpcId: string): MysqlInstanceListInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): MysqlInstanceListInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): MysqlInstanceListInfo {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withFlavorRef(flavorRef: string): MysqlInstanceListInfo {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withFlavorInfo(flavorInfo: MysqlFlavorInfo): MysqlInstanceListInfo {
        this['flavor_info'] = flavorInfo;
        return this;
    }
    public set flavorInfo(flavorInfo: MysqlFlavorInfo  | undefined) {
        this['flavor_info'] = flavorInfo;
    }
    public get flavorInfo(): MysqlFlavorInfo | undefined {
        return this['flavor_info'];
    }
    public withVolume(volume: MysqlVolumeInfo): MysqlInstanceListInfo {
        this['volume'] = volume;
        return this;
    }
    public withBackupStrategy(backupStrategy: MysqlBackupStrategy): MysqlInstanceListInfo {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: MysqlBackupStrategy  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): MysqlBackupStrategy | undefined {
        return this['backup_strategy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): MysqlInstanceListInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTimeZone(timeZone: string): MysqlInstanceListInfo {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withChargeInfo(chargeInfo: MysqlChargeInfo): MysqlInstanceListInfo {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: MysqlChargeInfo  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): MysqlChargeInfo | undefined {
        return this['charge_info'];
    }
    public withDedicatedResourceId(dedicatedResourceId: string): MysqlInstanceListInfo {
        this['dedicated_resource_id'] = dedicatedResourceId;
        return this;
    }
    public set dedicatedResourceId(dedicatedResourceId: string  | undefined) {
        this['dedicated_resource_id'] = dedicatedResourceId;
    }
    public get dedicatedResourceId(): string | undefined {
        return this['dedicated_resource_id'];
    }
    public withTags(tags: Array<InstanceTagItem>): MysqlInstanceListInfo {
        this['tags'] = tags;
        return this;
    }
}