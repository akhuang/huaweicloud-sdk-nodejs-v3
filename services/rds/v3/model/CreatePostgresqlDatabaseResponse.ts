
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePostgresqlDatabaseResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): CreatePostgresqlDatabaseResponse {
        this['resp'] = resp;
        return this;
    }
}