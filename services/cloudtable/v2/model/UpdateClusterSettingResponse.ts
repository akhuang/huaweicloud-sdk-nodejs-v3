
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateClusterSettingResponse extends SdkResponse {
    private 'modify_result'?: boolean;
    public constructor() { 
        super();
    }
    public withModifyResult(modifyResult: boolean): UpdateClusterSettingResponse {
        this['modify_result'] = modifyResult;
        return this;
    }
    public set modifyResult(modifyResult: boolean  | undefined) {
        this['modify_result'] = modifyResult;
    }
    public get modifyResult(): boolean | undefined {
        return this['modify_result'];
    }
}