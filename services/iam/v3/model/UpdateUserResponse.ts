import { UpdateUserResult } from './UpdateUserResult';

import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class UpdateUserResponse extends SdkResponse {
    public user?: UpdateUserResult;
    public constructor() { 
        super();
    }
    public withUser(user: UpdateUserResult): UpdateUserResponse {
        this['user'] = user;
        return this;
    }
}