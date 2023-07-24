import { ShowCredential } from './ShowCredential';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class ShowPermanentAccessKeyResponse extends SdkResponse {
    public credential?: ShowCredential;
    public constructor() { 
        super();
    }
    public withCredential(credential: ShowCredential): ShowPermanentAccessKeyResponse {
        this['credential'] = credential;
        return this;
    }
}