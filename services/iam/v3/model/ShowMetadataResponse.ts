
import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowMetadataResponse extends SdkResponse {
    public id?: string;
    private 'idp_id'?: string | undefined;
    private 'entity_id'?: string | undefined;
    private 'protocol_id'?: string | undefined;
    private 'domain_id'?: string | undefined;
    private 'xaccount_type'?: string | undefined;
    private 'update_time'?: string | undefined;
    public data?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowMetadataResponse {
        this['id'] = id;
        return this;
    }
    public withIdpId(idpId: string): ShowMetadataResponse {
        this['idp_id'] = idpId;
        return this;
    }
    public set idpId(idpId: string | undefined) {
        this['idp_id'] = idpId;
    }
    public get idpId() {
        return this['idp_id'];
    }
    public withEntityId(entityId: string): ShowMetadataResponse {
        this['entity_id'] = entityId;
        return this;
    }
    public set entityId(entityId: string | undefined) {
        this['entity_id'] = entityId;
    }
    public get entityId() {
        return this['entity_id'];
    }
    public withProtocolId(protocolId: string): ShowMetadataResponse {
        this['protocol_id'] = protocolId;
        return this;
    }
    public set protocolId(protocolId: string | undefined) {
        this['protocol_id'] = protocolId;
    }
    public get protocolId() {
        return this['protocol_id'];
    }
    public withDomainId(domainId: string): ShowMetadataResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withXaccountType(xaccountType: string): ShowMetadataResponse {
        this['xaccount_type'] = xaccountType;
        return this;
    }
    public set xaccountType(xaccountType: string | undefined) {
        this['xaccount_type'] = xaccountType;
    }
    public get xaccountType() {
        return this['xaccount_type'];
    }
    public withUpdateTime(updateTime: string): ShowMetadataResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withData(data: string): ShowMetadataResponse {
        this['data'] = data;
        return this;
    }
}