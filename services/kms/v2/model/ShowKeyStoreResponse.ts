import { KeystoreDetails } from './KeystoreDetails';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowKeyStoreResponse extends SdkResponse {
    public keystore?: KeystoreDetails;
    public constructor() { 
        super();
    }
    public withKeystore(keystore: KeystoreDetails): ShowKeyStoreResponse {
        this['keystore'] = keystore;
        return this;
    }
}