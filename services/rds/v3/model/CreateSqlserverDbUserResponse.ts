
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSqlserverDbUserResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): CreateSqlserverDbUserResponse {
        this['resp'] = resp;
        return this;
    }
}