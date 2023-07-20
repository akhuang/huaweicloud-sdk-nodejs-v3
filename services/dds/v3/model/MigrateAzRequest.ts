import { MigrateAzRequestBody } from './MigrateAzRequestBody';


export class MigrateAzRequest {
    private 'instance_id'?: string;
    public body?: MigrateAzRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): MigrateAzRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: MigrateAzRequestBody): MigrateAzRequest {
        this['body'] = body;
        return this;
    }
}