import { ProtocolResult } from './ProtocolResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class KeystoneUpdateProtocolResponse extends SdkResponse {
    public protocol?: ProtocolResult;
    public constructor() { 
        super();
    }
    public withProtocol(protocol: ProtocolResult): KeystoneUpdateProtocolResponse {
        this['protocol'] = protocol;
        return this;
    }
}