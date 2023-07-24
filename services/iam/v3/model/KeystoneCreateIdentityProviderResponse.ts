import { IdentityprovidersResult } from './IdentityprovidersResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class KeystoneCreateIdentityProviderResponse extends SdkResponse {
    private 'identity_provider'?: IdentityprovidersResult | undefined;
    public constructor() { 
        super();
    }
    public withIdentityProvider(identityProvider: IdentityprovidersResult): KeystoneCreateIdentityProviderResponse {
        this['identity_provider'] = identityProvider;
        return this;
    }
    public set identityProvider(identityProvider: IdentityprovidersResult | undefined) {
        this['identity_provider'] = identityProvider;
    }
    public get identityProvider() {
        return this['identity_provider'];
    }
}