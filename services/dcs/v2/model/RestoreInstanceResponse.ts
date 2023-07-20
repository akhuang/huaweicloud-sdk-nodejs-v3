
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RestoreInstanceResponse extends SdkResponse {
    private 'restore_id'?: string;
    public constructor() { 
        super();
    }
    public withRestoreId(restoreId: string): RestoreInstanceResponse {
        this['restore_id'] = restoreId;
        return this;
    }
    public set restoreId(restoreId: string  | undefined) {
        this['restore_id'] = restoreId;
    }
    public get restoreId(): string | undefined {
        return this['restore_id'];
    }
}