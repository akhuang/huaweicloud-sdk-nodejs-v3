import { ConfigStatus } from './ConfigStatus';
import { IpInfo } from './IpInfo';
import { ListenerAccessControlPolicy } from './ListenerAccessControlPolicy';


export class IpGroupDetail {
    public id?: string;
    public name?: string;
    public description?: string;
    public status?: ConfigStatus;
    private 'ip_list'?: Array<IpInfo>;
    private 'associated_listeners'?: Array<ListenerAccessControlPolicy>;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): IpGroupDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IpGroupDetail {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): IpGroupDetail {
        this['description'] = description;
        return this;
    }
    public withStatus(status: ConfigStatus): IpGroupDetail {
        this['status'] = status;
        return this;
    }
    public withIpList(ipList: Array<IpInfo>): IpGroupDetail {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<IpInfo>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<IpInfo> | undefined {
        return this['ip_list'];
    }
    public withAssociatedListeners(associatedListeners: Array<ListenerAccessControlPolicy>): IpGroupDetail {
        this['associated_listeners'] = associatedListeners;
        return this;
    }
    public set associatedListeners(associatedListeners: Array<ListenerAccessControlPolicy>  | undefined) {
        this['associated_listeners'] = associatedListeners;
    }
    public get associatedListeners(): Array<ListenerAccessControlPolicy> | undefined {
        return this['associated_listeners'];
    }
    public withCreatedAt(createdAt: Date): IpGroupDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): IpGroupDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}