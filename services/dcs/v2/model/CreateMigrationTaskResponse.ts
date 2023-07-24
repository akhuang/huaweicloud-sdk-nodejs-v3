
import { SdkResponse } from "@huaweicloudtest/huaweicloud-sdk-core/SdkResponse";

export class CreateMigrationTaskResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public status?: CreateMigrationTaskResponseStatusEnum;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateMigrationTaskResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateMigrationTaskResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: CreateMigrationTaskResponseStatusEnum): CreateMigrationTaskResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateMigrationTaskResponseStatusEnum {
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
    MIGRATING = 'MIGRATING',
    TERMINATED = 'TERMINATED'
}
