import { KeyStatusInfo } from './KeyStatusInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisableKeyResponse extends SdkResponse {
    private 'key_info'?: KeyStatusInfo;
    public constructor() { 
        super();
    }
    public withKeyInfo(keyInfo: KeyStatusInfo): DisableKeyResponse {
        this['key_info'] = keyInfo;
        return this;
    }
    public set keyInfo(keyInfo: KeyStatusInfo  | undefined) {
        this['key_info'] = keyInfo;
    }
    public get keyInfo(): KeyStatusInfo | undefined {
        return this['key_info'];
    }
}