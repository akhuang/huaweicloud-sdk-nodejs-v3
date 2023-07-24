import { ProtocolResult } from './ProtocolResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class KeystoneShowProtocolResponse extends SdkResponse {
    public protocol?: ProtocolResult;
    public constructor() { 
        super();
    }
    public withProtocol(protocol: ProtocolResult): KeystoneShowProtocolResponse {
        this['protocol'] = protocol;
        return this;
    }
}