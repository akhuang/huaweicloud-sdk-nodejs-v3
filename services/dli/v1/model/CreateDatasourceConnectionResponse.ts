
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDatasourceConnectionResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'connection_id'?: string;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): CreateDatasourceConnectionResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): CreateDatasourceConnectionResponse {
        this['message'] = message;
        return this;
    }
    public withConnectionId(connectionId: string): CreateDatasourceConnectionResponse {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
}