import { OpenIdConnectConfig } from './OpenIdConnectConfig';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class UpdateOpenIdConnectConfigResponse extends SdkResponse {
    private 'openid_connect_config'?: OpenIdConnectConfig | undefined;
    public constructor() { 
        super();
    }
    public withOpenidConnectConfig(openidConnectConfig: OpenIdConnectConfig): UpdateOpenIdConnectConfigResponse {
        this['openid_connect_config'] = openidConnectConfig;
        return this;
    }
    public set openidConnectConfig(openidConnectConfig: OpenIdConnectConfig | undefined) {
        this['openid_connect_config'] = openidConnectConfig;
    }
    public get openidConnectConfig() {
        return this['openid_connect_config'];
    }
}