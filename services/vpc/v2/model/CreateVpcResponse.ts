import { Vpc } from './Vpc';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class CreateVpcResponse extends SdkResponse {
    public vpc?: Vpc;
    public constructor() { 
        super();
    }
    public withVpc(vpc: Vpc): CreateVpcResponse {
        this['vpc'] = vpc;
        return this;
    }
}