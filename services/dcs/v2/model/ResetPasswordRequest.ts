import { ResetInstancePasswordBody } from './ResetInstancePasswordBody';


export class ResetPasswordRequest {
    private 'instance_id'?: string;
    public body?: ResetInstancePasswordBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ResetPasswordRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ResetInstancePasswordBody): ResetPasswordRequest {
        this['body'] = body;
        return this;
    }
}